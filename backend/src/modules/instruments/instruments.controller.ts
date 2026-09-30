import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getInstruments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const instruments = await prisma.instrumentStandard.findMany({
      include: {
        versions: {
          orderBy: { effective_date: 'desc' }
        }
      }
    });
    res.json({ data: instruments });
  } catch (error) { next(error); }
};

export const getInstrumentTree = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const version = await prisma.instrumentVersion.findUnique({
      where: { id },
      include: {
        criteria: {
          where: { parent_id: null },
          include: {
            children: {
              include: {
                children: {
                  include: { children: true }
                }
              },
              orderBy: { sort_order: 'asc' }
            }
          },
          orderBy: { sort_order: 'asc' }
        }
      }
    });

    if (!version) return res.status(404).json({ error: { message: 'Instrument version not found' }});
    res.json({ data: version });
  } catch (error) { next(error); }
};

export const importInstrument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { instrument_name, version_label, criteria } = req.body;
    
    if (!instrument_name || !version_label || !criteria) {
      return res.status(400).json({ error: { message: 'Format JSON tidak valid. Membutuhkan instrument_name, version_label, dan criteria.' }});
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Upsert Standard
      const standardCode = instrument_name.toUpperCase().replace(/\s+/g, '_');
      const standard = await tx.instrumentStandard.upsert({
        where: { code: standardCode },
        update: {},
        create: {
          code: standardCode,
          name: instrument_name,
        }
      });

      // 2. Create Version
      const version = await tx.instrumentVersion.create({
        data: {
          standard_id: standard.id,
          version_label: version_label,
          effective_date: new Date(),
          status: 'ACTIVE'
        }
      });

      // 3. Insert Criteria Tree recursively
      let kriteriaOrder = 1;
      for (const k of criteria) {
        const krit = await tx.instrumentCriterion.create({
          data: {
            version_id: version.id,
            code: `K${k.number}`,
            name: k.name,
            description: k.description,
            level: 0,
            sort_order: kriteriaOrder++
          }
        });

        if (k.dimensions) {
          let dimOrder = 1;
          for (const d of k.dimensions) {
            const dim = await tx.instrumentCriterion.create({
              data: {
                version_id: version.id,
                parent_id: krit.id,
                code: `D${d.number}`,
                name: d.name,
                description: d.description,
                level: 1,
                sort_order: dimOrder++
              }
            });

            if (d.indicators) {
              let indOrder = 1;
              for (const i of d.indicators) {
                await tx.instrumentCriterion.create({
                  data: {
                    version_id: version.id,
                    parent_id: dim.id,
                    code: `I${i.number}`,
                    name: i.name,
                    description: i.description,
                    rubric_description: i.assessment_guide,
                    level: 2,
                    sort_order: indOrder++
                  }
                });
              }
            }
          }
        }
      }
      return version;
    });

    res.status(201).json({ data: result, message: 'Import berhasil' });
  } catch (error) {
    next(error);
  }
};
