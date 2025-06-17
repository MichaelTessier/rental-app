import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query getCars {
    cars {
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
  }
`

export const GET_CAR = gql`
  query getCar($id: String!) {
    car(id: $id) {
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
  }
`