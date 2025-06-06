import { carList } from "../../controllers/car.controllers";

export const carResolvers = {

  Query: {
    cars: async (_: any, args: { filters: any}, context: any) => carList()
  }

}