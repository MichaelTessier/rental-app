import { Application, json } from "express";
import cors from "cors";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@as-integrations/express5';
import { carTypeDefs } from "../api/car/car.typeDefs";
import { carResolvers } from "../api/car/car.resolvers";


export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs]
  const resolvers = [carResolvers]
  
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  })

  await apolloServer.start();

  app.use(
    "/graphql",
    cors({
      origin:[ "http://localhost:5173"], 
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer)
  )
}