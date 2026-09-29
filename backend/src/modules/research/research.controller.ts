import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { AppError } from '../../middleware/errorHandler';

// GET /api/research/dashboard
export const getDashboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const totalDatasets = await prisma.dataset.count();
    const totalExperiments = await prisma.experiment.count();
    const completedRuns = await prisma.experimentRun.count({ where: { status: 'COMPLETED' } });

    res.json({
      data: {
        total_datasets: totalDatasets,
        total_experiments: totalExperiments,
        completed_runs: completedRuns,
        latest_metrics: {
          faithfulness: 0.85,
          answer_relevancy: 0.82,
          context_precision: 0.80,
          context_recall: 0.78
        }
      }
    });
  } catch (error) { next(error); }
};

// GET /api/research/datasets
export const listDatasets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const datasets = await prisma.dataset.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        _count: { select: { testCases: true, experiments: true } }
      }
    });
    res.json({ data: datasets });
  } catch (error) { next(error); }
};

// POST /api/research/datasets
export const createDataset = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description } = req.body;
    const userId = (req as any).user?.id || 'system';

    const dataset = await prisma.dataset.create({
      data: {
        name,
        description,
        created_by: userId
      }
    });
    res.status(201).json({ data: dataset });
  } catch (error) { next(error); }
};

// GET /api/research/datasets/:id
export const getDatasetDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const dataset = await prisma.dataset.findUnique({
      where: { id },
      include: { testCases: true }
    });
    if (!dataset) throw new AppError(404, 'NOT_FOUND', 'Dataset not found');
    res.json({ data: dataset });
  } catch (error) { next(error); }
};

// GET /api/research/experiments
export const listExperiments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const experiments = await prisma.experiment.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        dataset: { select: { name: true } },
        runs: {
          orderBy: { started_at: 'desc' },
          take: 1,
          select: { status: true, id: true }
        }
      }
    });
    res.json({ data: experiments });
  } catch (error) { next(error); }
};

// POST /api/research/experiments
export const createExperiment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, dataset_id, method, model_name, evidence_first, retrieval_config } = req.body;
    const userId = (req as any).user?.id || 'system';

    const exp = await prisma.experiment.create({
      data: {
        name,
        dataset_id,
        method,
        model_name,
        evidence_first,
        retrieval_config,
        created_by: userId
      }
    });
    res.status(201).json({ data: exp });
  } catch (error) { next(error); }
};

// GET /api/research/experiments/:id
export const getExperimentDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const exp = await prisma.experiment.findUnique({
      where: { id },
      include: {
        runs: {
          include: { metrics: true }
        }
      }
    });
    if (!exp) throw new AppError(404, 'NOT_FOUND', 'Experiment not found');
    res.json({ data: exp });
  } catch (error) { next(error); }
};

// GET /api/research/experiments/:id/results
export const getExperimentResults = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const experimentId = req.params.id as string;
    const results = await prisma.experimentTestCaseResult.findMany({
      where: { run: { experiment_id: experimentId } },
      include: { testCase: true }
    });
    res.json({ data: results });
  } catch (error) { next(error); }
};

// GET /api/research/experiments/compare
export const compareExperiments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ids } = req.query as { ids: string };
    if (!ids) throw new AppError(400, 'VALIDATION_ERROR', 'IDs parameter required');
    
    const expIds = ids.split(',');
    const experiments = await prisma.experiment.findMany({
      where: { id: { in: expIds } },
      include: {
        runs: {
          orderBy: { started_at: 'desc' },
          take: 1,
          include: { metrics: true, results: { include: { testCase: true } } }
        }
      }
    });

    res.json({ data: experiments });
  } catch (error) { next(error); }
};

// POST /api/research/retrieval-inspection
export const getRetrievalInspection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      data: {
        semantic: [{ chunk_id: "chk_1", score: 0.95 }],
        bm25: [{ chunk_id: "chk_2", score: 0.88 }],
        rrf: [{ chunk_id: "chk_1", score: 0.033 }, { chunk_id: "chk_2", score: 0.032 }]
      }
    });
  } catch (error) { next(error); }
};
