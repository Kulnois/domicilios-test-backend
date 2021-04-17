import express from 'express'
import dotenv from 'dotenv'

import colors from 'colors'

import connectDB from './config/db.js'

import statusRoutes from './routes/statusRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running Domicilios Test...')
})

app.use('/api/statuses', statusRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runnin ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))