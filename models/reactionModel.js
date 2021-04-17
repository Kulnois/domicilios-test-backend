import mongoose from 'mongoose'

const reactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    isReaction: {
        type: Boolean,
        required: true,
        default: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Status'
    },
}, {
    timestamps: true
})

const reaction = mongoose.model('Reaction', reactionSchema)

export default reaction