import { ErrorCode } from "@/graphql/__generated__/types";
import { ApolloError } from "@apollo/client";

export function useError() {
  function isNotFoundError(error?: ApolloError): boolean {
    return error?.graphQLErrors?.[0]?.extensions?.code === ErrorCode.NotFound;
  }

  function isBadRequestError(error?: ApolloError): boolean {
    return error?.graphQLErrors?.[0]?.extensions?.code === ErrorCode.BadRequest;
  }   

  return {
    isNotFoundError,
    isBadRequestError
  }
}