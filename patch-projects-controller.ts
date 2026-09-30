import fs from 'fs';

const file = 'backend/src/modules/projects/projects.controller.ts';
let code = fs.readFileSync(file, 'utf-8');

const newLogic = `
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
`;

// Replace the old templates logic
const oldLogicStart = "// Saat project dibuat, copy DedStructureTemplate menjadi DedSection untuk project ini";
const oldLogicEnd = "res.status(201).json({ data: project });";

const before = code.substring(0, code.indexOf(oldLogicStart));
const after = "    " + oldLogicEnd + code.substring(code.indexOf(oldLogicEnd) + oldLogicEnd.length);

fs.writeFileSync(file, before + newLogic + after);
