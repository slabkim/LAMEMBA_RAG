import { Router } from 'express';
import {
  getReviewDashboard,
  getAssignedProjects,
  getProjectReviews,
  createReviewAssignment,
  getReviewDetail,
  addComment,
  approveDed,
  requestRevision,
  getRevisions,
  approveProjectDed
} from './review.controller';

// Note: Ensure the paths to these middlewares are correct for your project structure
import { validate } from '../../middleware/validate'; 
import { authenticate } from '../../middleware/authenticate';
import { approveReviewSchema, requestRevisionSchema } from './review.schema';

const router = Router();

router.use(authenticate);

router.get('/dashboard', getReviewDashboard);
router.get('/assigned-projects', getAssignedProjects);
router.get('/project/:projectId', getProjectReviews);
router.post('/assign', createReviewAssignment);
router.get('/revisions', getRevisions);
router.get('/:id', getReviewDetail);

router.post('/:id/comment', addComment);

router.post(
  '/:id/approve',
  validate(approveReviewSchema),
  approveDed
);

router.post(
  '/:id/request-revision',
  validate(requestRevisionSchema),
  requestRevision
);

router.post('/project/:projectId/approve', approveProjectDed);

export default router;
