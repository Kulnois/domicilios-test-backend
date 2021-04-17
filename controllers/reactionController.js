import asyncHandler from 'express-async-handler'
import Reaction from '../models/reactionModel.js'

// @desc Fetch all reaction
// @route GET /api/reactions
// @access Public
const getReactions = asyncHandler(async (req, res) => {
    const reactions = await Reaction.find({})
    res.json(reactions)
})

// @desc Fetch single reaction
// @route GET /api/reactions/:id
// @access Public
const getReactionsById = asyncHandler(async (req, res) => {
    const reaction = await Reaction.findById(req.params.id)

    if(reaction) {
        res.json(reaction)
    } else {
        res.status(404)
        throw new Error('Reaction not found')
    }
})

// @desc Delete a reaction
// @route DELETE /api/reactions/:id
// @access Private
const deleteReaction = asyncHandler(async (req, res) => {
    const reaction = await Reaction.findById(req.params.id)

    if(reaction) {
        await reaction.remove()
        res.json({ message: 'Reaction removed'})
    } else {
        res.status(404)
        throw new Error('Reaction not found')
    }
})

// @desc Create a reaction
// @route POST /api/reactions
// @access Private
const createReaction = asyncHandler(async (req, res) => {
    const { statusId } = req.body
    const reaction = new Status({
        user: req.user._id,
        status: statusId

    })

    const createdReaction = await reaction.save()
    res.status(201).json(createdReaction)
})

// @desc Update a reaction
// @route PUT /api/reactions/:id
// @access Private
const updateReaction = asyncHandler(async (req, res) => {
    const {isReaction} = req.body

    const reaction = await Reaction.findById(req.params.id)

    if (reaction) {
        status.isReaction = isReaction
        const updatedReaction = await reaction.save()
        res.json(updatedReaction)
    } else {
        res.status(404)
        throw new Erro('Reaction not found')
    }
})

export {
    getReactions,
    getReactionsById,
    deleteReaction,
    createReaction,
    updateReaction
}