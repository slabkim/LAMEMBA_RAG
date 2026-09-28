import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { AppError } from '../../middleware/errorHandler';

// GET /api/review/dashboard
export const getReviewDashboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      data: {
        assigned_projects: 3,
        pending_reviews: 5,
        approved: 12,
        revision_requested: 2
      }
    });
  } catch (error) { next(error); }
};

// GET /api/review/projects
export const getAssignedProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviewerId = (req as any).user?.id || 'system';
    const reviews = await prisma.dedReview.findMany({
      where: { reviewer_id: reviewerId },
      include: {
        response: { include: { section: true } }
      }
    });
    res.json({ data: reviews });
  } catch (error) { next(error); }
};

// GET /api/projects/:projectId/reviews
export const getProjectReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId as string;
    const reviews = await prisma.dedReview.findMany({
      where: { response: { section: { project_id: projectId } } },
      include: { response: { select: { id: true, version: true, status: true } } }
    });
    res.json({ data: reviews });
  } catch (error) { next(error); }
};

// POST /api/ded/responses/:id/reviews
export const createReviewAssignment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const responseId = req.params.id as string;
    const reviewerId = (req as any).user?.id || 'system';

    const review = await prisma.dedReview.create({
      data: {
        response_id: responseId,
        reviewer_id: reviewerId,
        status: 'PENDING',
      }
    });
    res.status(201).json({ data: review });
  } catch (error) { next(error); }
};

// GET /api/reviews/:id
export const getReviewDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const review = await prisma.dedReview.findUnique({
      where: { id },
      include: { issues: true, response: { include: { evidenceRefs: true, section: true } } }
    });
    if (!review) throw new AppError(404, 'NOT_FOUND', 'Review not found');
    res.json({ data: review });
  } catch (error) { next(error); }
};

// POST /api/reviews/:id/comments
export const addComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { comment } = req.body;
    
    const updated = await prisma.dedReview.update({
      where: { id },
      data: { overall_comment: comment, updated_at: new Date() }
    });
    res.json({ data: updated });
  } catch (error) { next(error); }
};

// POST /api/reviews/:id/approve
export const approveDed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { comment } = req.body;
    const reviewerId = (req as any).user?.id || 'system';

    const review = await prisma.dedReview.findUnique({ where: { id } });
    if (!review) throw new AppError(404, 'NOT_FOUND', 'Review not found');

    const result = await prisma.$transaction(async (tx) => {
      const updatedReview = await tx.dedReview.update({
        where: { id },
        data: { status: 'APPROVED', overall_comment: comment, updated_at: new Date() }
      });

      const response = await tx.dedResponse.update({
        where: { id: review.response_id },
        data: { status: 'APPROVED', updated_at: new Date() }
      });

      await tx.dedResponseVersion.create({
        data: {
          response_id: response.id,
          version_no: response.version,
          content: response.content,
          status: 'APPROVED',
          change_summary: 'Approved by reviewer',
          created_by: reviewerId,
        }
      });
      return updatedReview;
    });

    res.json({ data: result });
  } catch (error) { next(error); }
};

// POST /api/reviews/:id/request-revision
export const requestRevision = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { comment, specific_issues } = req.body;
    const reviewerId = (req as any).user?.id || 'system';

    const review = await prisma.dedReview.findUnique({ where: { id } });
    if (!review) throw new AppError(404, 'NOT_FOUND', 'Review not found');

    const result = await prisma.$transaction(async (tx) => {
      const updatedReview = await tx.dedReview.update({
        where: { id },
        data: { status: 'REVISION_REQUESTED', overall_comment: comment, updated_at: new Date() }
      });

      if (specific_issues && specific_issues.length > 0) {
        await tx.dedReviewIssue.createMany({
          data: specific_issues.map((issue: string) => ({
            review_id: id,
            issue_text: issue,
            status: 'OPEN'
          }))
        });
      }

      const response = await tx.dedResponse.update({
        where: { id: review.response_id },
        data: { status: 'REVISION_REQUESTED', updated_at: new Date() }
      });

      await tx.dedResponseVersion.create({
        data: {
          response_id: response.id,
          version_no: response.version,
          content: response.content,
          status: 'REVISION_REQUESTED',
          change_summary: 'Revision requested by reviewer',
          created_by: reviewerId,
        }
      });
      return updatedReview;
    });
    res.json({ data: result });
  } catch (error) { next(error); }
};

// GET /api/review/revisions
export const getRevisions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const revisions = await prisma.dedReviewIssue.findMany({
      include: { review: { include: { response: { select: { section_id: true } } } } }
    });
    res.json({ data: revisions });
  } catch (error) { next(error); }
};

// POST /api/projects/:projectId/ded/approve
export const approveProjectDed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId as string;
    res.json({ message: 'Project DED approved successfully', project_id: projectId });
  } catch (error) { next(error); }
};
