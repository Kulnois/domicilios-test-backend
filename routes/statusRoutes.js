import express from 'express'

import { createStatus, deleteStatus, getStatuses, getStatusesById, updateStatus} from '../controllers/statusController.js'

const router = express.Router()

router.route('/').get(getStatuses)

export default router