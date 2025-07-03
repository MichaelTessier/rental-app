import { gql } from 'graphql-tag' 

export const commonTypeDefs = gql`
  scalar EmailAddress
  scalar ObjectID
  scalar DateTime

  enum ErrorCode {
    NOT_FOUND
    BAD_REQUEST
    # UNAUTHORIZED
    # FORBIDDEN
    # CONFLICT
    INTERNAL_SERVER_ERROR
  }

  type Image {
    url: String!
    publicId: String!
  }

  input ImageInput {
    url: String!
    publicId: String!
  }

  type Ratings {
    count: Int!
    value: Float!
  }
`