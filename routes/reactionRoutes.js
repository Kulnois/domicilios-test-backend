import express from 'express'

import { createReaction, deleteReaction, getReactions, getReactionsById, updateReaction} from '../controllers/reactionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getReactions).post(protect, createReaction)
router.route('/:id').get(getReactionsById).delete(protect, deleteReaction).put(protect, updateReaction)

export default router