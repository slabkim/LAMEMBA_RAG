import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany({
      where: { deleted_at: null },
      orderBy: { created_at: 'desc' },
      include: {
        documents: { select: { id: true } },
        instrumentVersion: true
      }
    });
    res.json({
      data: projects.map(p => ({
        ...p,
        document_count: p.documents.length,
        documents: undefined
      }))
    });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, program_studi, jenjang } = req.body;
    
    // Auto-generate code untuk mencegah duplikasi (Misal: PRJ-S1-MAN-168123)
    const progCode = program_studi.substring(0, 3).toUpperCase();
    const uniqueTime = Date.now().toString().slice(-6);
    const generatedCode = `PRJ-${jenjang}-${progCode}-${uniqueTime}`;

    // Cari versi instrumen yang aktif secara otomatis (LAMEMBA 2025)
    let versionId = req.body.instrument_version_id;
    if (!versionId) {
      const activeVersion = await prisma.instrumentVersion.findFirst({
        where: { status: 'ACTIVE' },
        orderBy: { effective_date: 'desc' }
      });
      if (activeVersion) {
        versionId = activeVersion.id;
      } else {
        throw new Error("Tidak ada versi instrumen yang aktif. Jalankan seed terlebih dahulu.");
      }
    }

    const project = await prisma.project.create({
      data: {
        name,
        code: generatedCode,
        program_studi,
        jenjang,
        instrument_version_id: versionId,
        created_by: req.user!.id,
        status: 'ACTIVE'
      }
    });
    
    
    // Saat project dibuat, copy InstrumentCriterion menjadi DedSection secara hierarkis
    const criteria = await prisma.instrumentCriterion.findMany({
      where: { version_id: versionId, parent_id: null },
      orderBy: { sort_order: 'asc' },
      include: {
        children: {
          orderBy: { sort_order: 'asc' },
          include: {
            children: {
              orderBy: { sort_order: 'asc' }
            }
          }
        }
      }
    });

    for (const kriteria of criteria) {
      const sectionKriteria = await prisma.dedSection.create({
        data: {
          project_id: project.id,
          instrument_id: kriteria.id,
          code: kriteria.code,
          title: kriteria.name,
          description: kriteria.description,
          status: 'EMPTY',
          sort_order: kriteria.sort_order,
          level: 0
        }
      });

      for (const dimensi of kriteria.children) {
        const sectionDimensi = await prisma.dedSection.create({
          data: {
            project_id: project.id,
            parent_id: sectionKriteria.id,
            instrument_id: dimensi.id,
            code: dimensi.code,
            title: dimensi.name,
            description: dimensi.description,
            status: 'EMPTY',
            sort_order: dimensi.sort_order,
            level: 1
          }
        });

        for (const indikator of dimensi.children) {
          await prisma.dedSection.create({
            data: {
              project_id: project.id,
              parent_id: sectionDimensi.id,
              instrument_id: indikator.id,
              code: indikator.code,
              title: indikator.name,
              description: indikator.description,
              status: 'EMPTY',
              sort_order: indikator.sort_order,
              level: 2
            }
          });
        }
      }
    }
    res.status(201).json({ data: project });
  } catch (error) {
    next(error);
  }
};

export const getProjectDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        instrumentVersion: true,
        documents: {
          where: { deleted_at: null },
          select: { id: true, name: true, document_type: true, status: true }
        }
      }
    });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json({ data: project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { name, program_studi, jenjang, status } = req.body;
    const project = await prisma.project.update({
      where: { id },
      data: { name, program_studi, jenjang, status }
    });
    res.json({ data: project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await prisma.project.update({
      where: { id },
      data: { deleted_at: new Date() }
    });
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};
