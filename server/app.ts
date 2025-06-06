import express from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from './config/database'
import { startApolloServer } from './apollo/server'

dotenv.config({
  path: './config/env.local',
})

const app = express()

connectToDatabase()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, async () => {
  await startApolloServer(app)

  console.log(`Server is running on http://localhost:${PORT}`)
})