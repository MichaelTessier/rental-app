import mongoose from 'mongoose'
import mongooseConfig from './mongoose.config'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongooseConfig.mongoUri)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }

}