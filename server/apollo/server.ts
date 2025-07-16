import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema"
import { formatError } from "../api/error/formatError";
import { Context } from "./context";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "../api/middlewares/permissions.middleware";

export async function startApolloServer() {
  const apolloServer = new ApolloServer<Context>({
    schema: applyMiddleware(
      makeExecutableSchema(schema),
      permissions
    ),
    formatError,
  })

  await apolloServer.start();

  return apolloServer;
}