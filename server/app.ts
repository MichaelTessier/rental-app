import 'dotenv/config';
import express from 'express'
import { connectToDatabase } from './services/mongoose/mongoose.service'
import { startApolloServer } from './apollo/server'
import appConfig from './app.config'

const app = express()

connectToDatabase()

app.get('/', (_, res) => {
  res.send('Hello, World!')
})

app.listen(appConfig.port, async () => {
  await startApolloServer(app)

  console.log(`Server is running on http://localhost:${appConfig.port}`)
})