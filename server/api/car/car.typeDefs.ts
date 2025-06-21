import { gql } from 'graphql-tag' 

export const carTypeDefs = gql`
  type Query {
    cars(input: CarsInput): [Car!]
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
    status: CarStatus!
    rentPerDay: Float!
    address: String!
    year: Int!
    power: Int!
    millage: Int!
    brand: CarBrand!
    transmission: CarTransmission!
    fuelType: CarFuelType!
    seats: CarSeats!
    doors: CarDoors!
    category: CarCategory!
    images: [Image!]
    createdAt: String!
    updatedAt: String!
    ratings: Ratings
    reviews: [String!]
  }

  input CarInput {
    name: String!
    description: String!
    status: CarStatus
    rentPerDay: Float!
    address: String!
    images: [ImageInput!]
    brand: CarBrand!
    year: Int!
    transmission: CarTransmission!
    millage: Int!
    power: Int!
    seats: CarSeats!
    doors: CarDoors!
    fuelType: CarFuelType!
    category: CarCategory!
  }

  input CarsInput {
    query: String
    filters: CarFiltersInput
  }

  input CarFiltersInput {
    brand: CarBrand
    category: CarCategory
    transmission: CarTransmission
    fuelType: CarFuelType
    status: CarStatus
    rentPerDay: RentPerDayInput
  }

  input RentPerDayInput {
    min: Int
    max: Int
  }

  enum CarStatus {
    Draft
    Published
    Archived
  }

  enum CarBrand {
    Toyota
    Honda
    Ford
    BMW
    Mercedes
    Audi
    Volkswagen
    Hyundai
    Nissan
    Chevrolet
  }

  enum CarCategory {
    Sedan
    SUV
    Hatchback
    Coupe
    Convertible
    Minivan
    Pickup
  }

  enum CarTransmission {
    Manual
    Automatic
    SemiAutomatic
    Electric
  }

  enum CarFuelType {
    Petrol
    Diesel
    Electric
    Hybrid
  }

  enum CarDoors {
    Two
    Three
    Four
    Five
  }

  enum CarSeats {
    Two
    Four
    Five
    Six
    Seven
  }
`