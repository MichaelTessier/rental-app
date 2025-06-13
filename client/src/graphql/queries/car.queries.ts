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