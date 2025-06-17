import { gql } from 'graphql-tag' 

export const carTypeDefs = gql`
  type Query {
    cars: [Car]
    car(id: String!): Car
  } 

  type Mutation {
    createCar(input: CarInput!): Car
    updateCar(id: String!, input: CarInput!): Boolean
    deleteCar(id: String!): Boolean
  }

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
    images: [Image!]
    createdAt: String!
    updatedAt: String!
    ratings: Ratings
  }

  input CarInput {
    name: String!
    description: String!
    status: String
    rentPerDay: Float!
    address: String!
    images: [String!]
    brand: String!
    year: Int!
    transmission: String!
    millage: Int!
    power: Int!
    seats: Int!
    doors: Int!
    fuelType: String!
    category: String!
  }

  type Image {
    url: String!
    publicId: String!
  }

  type Ratings {
    count: Int!
    value: Float!
  }
`