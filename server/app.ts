import express from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from './config/database'

dotenv.config({
  path: './config/env.local',
})

const app = express()

connectToDatabase()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})