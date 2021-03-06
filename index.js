import express from 'express'
import dotenv from 'dotenv'

import colors from 'colors'

import connectDB from './config/db.js'
import { notFount, errorHandler } from './middleware/errorMiddleware.js'

import statusRoutes from './routes/statusRoutes.js'
import userRoutes from './routes/userRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
import reactionRoutes from './routes/reactionRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running Domicilios Test...')
})

app.use('/api/statuses', statusRoutes)
app.use('/api/users', userRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/reactions', reactionRoutes)

app.use(notFount)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runnin ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))