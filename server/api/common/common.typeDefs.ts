import { gql } from 'graphql-tag' 

export const commonTypeDefs = gql`
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