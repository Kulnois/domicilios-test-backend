import moogoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from '../data/user.js'
import statuses from '../data/statuses.js'
import User from '../models/userModel.js'
import Status from '../models/statusModel.js'
import connectDB from '../config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Status.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleStatuses = statuses.map(status => {
            return {...status, user: adminUser}
        })

        await Status.insertMany(sampleStatuses)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        await Status.deleteMany()
        await User.deleteMany()    

        console.log('Data Desctroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}