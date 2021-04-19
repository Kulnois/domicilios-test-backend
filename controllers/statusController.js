import asyncHandler from 'express-async-handler'
import Status from '../models/statusModel.js'
import Comment from '../models/commentModel.js'
import Reaction from '../models/reactionModel.js'

// @desc Fetch all statuses
// @route GET /api/statuses
// @access Public
const getStatuses = asyncHandler(async (req, res) => {
    const statuses = await Status.find({})
                                .populate('user', 'id name')
                                .sort({createdAt: 'descending'})

    const asyncRes = await Promise.all(statuses.map(async (i) => {
        const comments = await Comment.find({status: i._id}).populate('user', 'id name')
        const reactions = await Reaction.find({status: i._id})
        return  {
            _id: i.id,     
            content: i.content,
            user: i.user,
            createdAt: i.createdAt,
            updatedAt: i.updatedAt,
            comments: comments,
            reactions:  reactions
        }
    }));
    res.json(asyncRes)
})

// @desc Fetch single status
// @route GET /api/statuses/:id
// @access Public
const getStatusesById = asyncHandler(async (req, res) => {
    const status = await Status.findById(req.params.id)

    if(status) {
        res.json(status)
    } else {
        res.status(404)
        throw new Error('Status not found')
    }
})

// @desc Delete a status
// @route DELETE /api/statuses/:id
// @access Private
const deleteStatus = asyncHandler(async (req, res) => {
    const status = await Status.findById(req.params.id)

    if(status) {
        await status.remove()
        res.json({ message: 'Status removed'})
    } else {
        res.status(404)
        throw new Error('Status not found')
    }
})

// @desc Create a status
// @route POST /api/statuses
// @access Private
const createStatus = asyncHandler(async (req, res) => {
    const { content } = req.body
    const status = new Status({
        user: req.user._id,
        content: content,
    })

    const createdStatus = await status.save()
    res.status(201).json(createdStatus)
})

// @desc Update a status
// @route PUT /api/statuses/:id
// @access Private
const updateStatus = asyncHandler(async (req, res) => {
    const {content} = req.body

    const status = await Status.findById(req.params.id)

    if (status) {
        status.content = content
        const updatedStatus = await product.save()
        res.json(updatedStatus)
    } else {
        res.status(404)
        throw new Erro('Status not found')
    }
})

export {
    getStatuses,
    getStatusesById,
    deleteStatus,
    createStatus,
    updateStatus
}