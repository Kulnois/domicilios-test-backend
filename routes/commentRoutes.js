import express from 'express'

import { createComment, deleteComment, getComments, getCommentsById, updateComment} from '../controllers/commentController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getComments).post(protect, createComment)
router.route('/:id').get(getCommentsById).delete(protect, deleteComment).put(protect, updateComment)

export default router