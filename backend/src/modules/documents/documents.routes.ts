import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {
  listDocuments, uploadDocument, getDocumentDetail,
  triggerProcessing, deleteDocument
} from './documents.controller';
import { authenticate } from '../../middleware/authenticate';

const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const projectId = req.body.project_id || 'general';
    const projectDir = path.join(uploadDir, projectId);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }
    cb(null, projectDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const router = Router();
router.use(authenticate);

router.get('/', listDocuments);
// Note: validate body after multer processes the multipart form
router.post('/upload', upload.single('file'), uploadDocument);
router.get('/:id', getDocumentDetail);
router.post('/:id/process', triggerProcessing);
router.delete('/:id', deleteDocument);

export default router;
