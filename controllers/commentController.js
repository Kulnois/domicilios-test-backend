import asyncHandler from 'express-async-handler'
import Comment from '../models/commentModel.js'

// @desc Fetch all comment
// @route GET /api/comments
// @access Public
const getComments = asyncHandler(async (req, res) => {
    const comments = await Comment.find({})
    res.json(comments)
})

// @desc Fetch single comment
// @route GET /api/comments/:id
// @access Public
const getCommentsById = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(comment) {
        res.json(comment)
    } else {
        res.status(404)
        throw new Error('Comment not found')
    }
})

// @desc Delete a comment
// @route DELETE /api/comments/:id
// @access Private
const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if(comment) {
        await comment.remove()
        res.json({ message: 'Comment removed'})
    } else {
        res.status(404)
        throw new Error('Comment not found')
    }
})

// @desc Create a comment
// @route POST /api/comments
// @access Private
const createComment = asyncHandler(async (req, res) => {
    const { content, statusId } = req.body
    const comment = new Comment({
        user: req.user._id,
        content: content,
        status: statusId

    })

    const createdComment = await comment.save()
    res.status(201).json(createdComment)
})

// @desc Update a comment
// @route PUT /api/comments/:id
// @access Private
const updateComment = asyncHandler(async (req, res) => {
    const {content} = req.body

    const comment = await Comment.findById(req.params.id)

    if (comment) {
        status.content = content
        const updatedComment = await comment.save()
        res.json(updatedComment)
    } else {
        res.status(404)
        throw new Erro('Comment not found')
    }
})

export {
    getComments,
    getCommentsById,
    deleteComment,
    createComment,
    updateComment
}