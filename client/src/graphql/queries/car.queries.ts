import { gql } from '@/__generated__/gql'

export const CarListFragment = gql(/* GraphQL */ `
  fragment CarList on Car {
    name
    category
    fuelType
    images {
      url
      publicId
    }
    id
    rentPerDay
    transmission
    ratings {
      count
      value
    }
  }
`);

export const getCars = gql(/* GraphQL */`
  query getCars($input: CarsInput) {
    cars(input: $input) {
      items {
        ...CarList
      }
    }
  }
`)

export const CarFragment = gql(/* GraphQL */ `
  fragment Car on Car {
    id
    name
    description
    status
    rentPerDay
    address
    year
    power
    millage
    brand
    transmission
    fuelType
    seats
    doors
    category
    images {
      url
      publicId
    }
    createdAt
    updatedAt
    ratings {
      count
      value
    }
  }
`);

export const getCar = gql(/* GraphQL */`
  query getCar($id: String!) {
    car(id: $id) {
      ...Car
    }
  }
`)