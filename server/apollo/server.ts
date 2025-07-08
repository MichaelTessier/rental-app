import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema"
import { formatError } from "../api/error/formatError";
import { Context } from "./context";

export async function startApolloServer() {
  const apolloServer = new ApolloServer<Context>({
    schema: makeExecutableSchema(schema),
    formatError,
  })

  await apolloServer.start();

  return apolloServer;
}