import { Router } from 'express';
import {
  listDocuments, uploadDocument, getDocumentDetail,
  triggerProcessing, deleteDocument
} from './documents.controller';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { uploadDocumentSchema, listDocumentsSchema } from './documents.schema';

const router = Router();
router.use(authenticate);

router.get('/', validate(listDocumentsSchema), listDocuments);
router.post('/upload', validate(uploadDocumentSchema), uploadDocument);
router.get('/:id', getDocumentDetail);
router.post('/:id/process', triggerProcessing);
router.delete('/:id', deleteDocument);

export default router;
