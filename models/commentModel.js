import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Status'
    },
}, {
    timestamps: true
})

const comment = mongoose.model('Comment', commentSchema)

export default comment