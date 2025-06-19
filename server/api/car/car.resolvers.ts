import { CarInput, MutationCreateCarArgs, MutationDeleteCarArgs, MutationUpdateCarArgs, QueryCarArgs } from "../__generated__/graphql";
import { carById, carList, createCar, deleteCar, updateCar } from "./car.controllers";

export const carResolvers = {
  Query: {
    cars: async () => await carList(),
    car: async (_root: {}, args: QueryCarArgs) => await carById(args.id)
  },

  Mutation: {
    createCar: async (_root: {}, args: MutationCreateCarArgs) => await createCar(args.input),
    updateCar: async (_root: {}, args: MutationUpdateCarArgs) => await updateCar(args.id, args.input),
    deleteCar: async (_root: {}, args: MutationDeleteCarArgs) => await deleteCar(args.id)
  }
}