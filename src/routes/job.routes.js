import express from 'express';
import {
  renderAllJobs, renderJobDetails, renderCreateJob, handleCreateJob, renderEditJob, handleEditJob, handleDeleteJob,
  renderJobApplicants, handleApplyJob
} from '../controllers/job.controller.js';
import { auth } from '../middleware/auth.js';
import { validateJob } from '../middleware/validation.js';
import { upload } from '../middleware/fileUpload.js';

const router = express.Router();

router.get('/', renderAllJobs);
router.get('/create', auth, renderCreateJob);
router.post('/create', auth, validateJob, handleCreateJob);
router.get('/:id', renderJobDetails);
router.get('/:id/edit', auth, renderEditJob);
router.post('/:id/edit', auth, validateJob, handleEditJob);
router.post('/:id/delete', auth, handleDeleteJob);
router.get('/:id/applicants', auth, renderJobApplicants);
router.post('/:id/apply', upload.single('resume'), handleApplyJob);

export default router;
