import { carById, carList, createCar, deleteCar, updateCar } from "../../controllers/car.controllers";
import { CarInput } from "../../types/car.types";

export const carResolvers = {

  Query: {
    cars: async (_: any) => await carList(),
    car: async (_: any, { id }: { id: string }) => await carById(id)
  },

  Mutation: {
    createCar: async (_:any, {input}: { input: CarInput}) => await createCar(input),
    updateCar: async (_: any, { id, input }: { id: string, input: CarInput }) => await updateCar(id, input),
    deleteCar: async (_: any, { id }: { id: string }) => await deleteCar(id)
  }
}