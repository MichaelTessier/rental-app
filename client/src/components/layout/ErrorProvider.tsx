import { ApolloError } from "@apollo/client"
import ErrorNotFound from "./ErrorNotFound"
import ErrorBadRequest from "./ErrorBadRequest"
import { ErrorCode } from "@/graphql/__generated__/types"

type Props = {
  error: ApolloError
}
function ErrorProvider({ error }: Props) {
  const code = error?.graphQLErrors?.[0]?.extensions?.code

  if(code === ErrorCode.NotFound) {
    return <ErrorNotFound />
  }

  if(code === ErrorCode.BadRequest) {
    return <ErrorBadRequest />
  }
}

export default ErrorProvider