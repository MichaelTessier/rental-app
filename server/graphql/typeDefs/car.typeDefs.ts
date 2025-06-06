import { gql } from 'graphql-tag' 


export const carTypeDefs = gql`
  type Query {
    cars: String
    car: Car!
  }

  # type Mutation {

  # }

  type Car {
    id: ID!
    name: String!
    description: String!
    status: String!
    rentPerDay: Float!
    address: String!
    year: Int!
    power: Int!
    millage: Int!
    brand: String!
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    category: String!
    images: [CarImage!]
    createdAt: String!
    updatedAt: String!
  }

  type CarImage {
    url: String!
    publicId: String!
  }
`