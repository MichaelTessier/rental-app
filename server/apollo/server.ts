import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema"

export async function startApolloServer() {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema(schema),
  })

  await apolloServer.start();

  return apolloServer;
}