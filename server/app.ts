import 'dotenv/config';
import express, { json } from 'express'
import cors from "cors";

import { connectToDatabase } from './services/mongoose/mongoose.service'
import { startApolloServer } from './apollo/server'
import appConfig from './app.config'
import { expressMiddleware } from '@as-integrations/express5';

const app = express()

connectToDatabase()

app.get('/', (_, res) => {
  res.send('Hello, World!')
})

app.listen(appConfig.port, async () => {
  
  const apolloServer = await startApolloServer()

  app.use(
    "/graphql",
    cors({
      origin:[ "http://localhost:5173"], 
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer)
  )

  console.log(`Server is running on http://localhost:${appConfig.port}`)
  console.log(`Apollo Server is running on http://localhost:${appConfig.port}/graphql`)
})