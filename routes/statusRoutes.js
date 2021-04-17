import express from 'express'

import { createStatus, deleteStatus, getStatuses, getStatusesById, updateStatus} from '../controllers/statusController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getStatuses).post(protect, createStatus)
router.route('/:id').get(getStatusesById).delete(protect, deleteStatus).put(protect, updateStatus)

export default router