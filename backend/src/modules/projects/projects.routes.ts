import { Router } from 'express';
import { getProjects, createProject, getProjectDetails } from './projects.controller';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { createProjectSchema } from './projects.schema';

const router = Router();
router.use(authenticate);
router.get('/', getProjects);
router.post('/', validate(createProjectSchema), createProject);
router.get('/:id', getProjectDetails);

export default router;
