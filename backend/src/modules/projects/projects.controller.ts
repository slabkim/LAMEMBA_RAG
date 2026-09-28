import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Phase 2: Simple fetch all. Later: scope by project_members if not ADMIN
    const projects = await prisma.project.findMany({
      include: {
        institution: { select: { name: true } },
        studyProgram: { select: { name: true, level: true } }
      }
    });
    res.json({ data: projects });
  } catch (error) { next(error); }
};

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, accreditation_year, status } = req.body;
    // Stubbing relations for early dev phase until complete seed is available
    const project = await prisma.project.create({
      data: {
        name,
        accreditation_year,
        status,
        created_by: req.user.id,
        // Using arbitrary/dummy values for testing (will fail if FK strict and no seed, handled later)
        institution_id: req.body.institution_id,
        study_program_id: req.body.study_program_id,
        instrument_version_id: req.body.instrument_version_id
      }
    });
    res.status(201).json({ data: project });
  } catch (error) { next(error); }
};

export const getProjectDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({ where: { id } });
    if (!project) return res.status(404).json({ error: { message: 'Project not found' }});
    res.json({ data: project });
  } catch (error) { next(error); }
};
