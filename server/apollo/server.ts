import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema"
import { formatError } from "../api/error/formatError";

export async function startApolloServer() {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema(schema),
    formatError,
  })

  await apolloServer.start();

  return apolloServer;
}