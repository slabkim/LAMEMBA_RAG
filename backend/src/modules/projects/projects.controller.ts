import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany({
      where: { deleted_at: null },
      orderBy: { created_at: 'desc' },
      include: {
        instruments: { where: { parent_id: null }, select: { id: true, code: true, name: true } },
        documents: { select: { id: true } }
      }
    });
    res.json({
      data: projects.map(p => ({
        ...p,
        document_count: p.documents.length,
        instrument_count: p.instruments.length,
        documents: undefined
      }))
    });
  } catch (error) { next(error); }
};

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, code, program_studi, jenjang, description, deadline } = req.body;
    const userId = (req as any).user?.id || 'system';

    const project = await prisma.project.create({
      data: {
        name,
        code,
        program_studi,
        jenjang,
        description,
        deadline: deadline ? new Date(deadline) : null,
        status: 'DRAFT',
        created_by: userId,
      }
    });
    res.status(201).json({ data: project });
  } catch (error) { next(error); }
};

export const getProjectDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        instruments: {
          where: { parent_id: null },
          orderBy: { sort_order: 'asc' },
          include: { children: { orderBy: { sort_order: 'asc' } } }
        },
        documents: {
          where: { deleted_at: null },
          select: { id: true, name: true, document_type: true, status: true }
        }
      }
    });
    if (!project) return res.status(404).json({ error: { message: 'Project not found' }});
    res.json({ data: project });
  } catch (error) { next(error); }
};
