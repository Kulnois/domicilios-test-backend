import mongoose from 'mongoose'

const statusSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    comments:  [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    reactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reaction',
        },
    ]
}, {
    timestamps: true
})

const status = mongoose.model('Status', statusSchema)

export default status