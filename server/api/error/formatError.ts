import { GraphQLFormattedError } from "graphql";
import { isMongoError } from ".";
import { ErrorCode } from "../__generated__/graphql";

export const  formatError = (formattedError: GraphQLFormattedError, error: any) => {
  let customCode = isMongoError(error.extensions?.error) ? ErrorCode.BadRequest : error.extensions?.error?.code

  return {
    ...formattedError,
    message: error.extensions?.error?.message || error.message,
    extensions: {
      code: customCode ?? error.extensions?.code ?? ErrorCode.InternalServerError,
      exception: error.extensions?.exception,
    },
  };
}