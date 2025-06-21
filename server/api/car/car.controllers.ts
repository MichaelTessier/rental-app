import { Car, CarInput, CarsInput, CarsOutput, Maybe } from "../__generated__/graphql";
import QueryService from "../services/query.service";
import CarModel from "./car.models";
import { toFilterQuery } from "./car.utils";


export const carList = async (args: Maybe<CarsInput> | undefined): Promise<CarsOutput> => {
  const queryService = new QueryService<Car>(CarModel);
  
  await queryService.search(args?.query).filters(toFilterQuery(args?.filters)).paginate(args?.page, args?.limit)

  const cars = await queryService.response;

  return { 
    cars,
    pagination: queryService.pagination
  }
}

export const createCar = async (car: CarInput) => {
  const newCar = await CarModel.create(car);

  return newCar
}

export const carById = async (id: string) => {
  const car = await CarModel.findById(id);

  if(!car) {
    throw new Error("Car not found");
  }

  return car;
}

export const updateCar = async (id: string, car: CarInput) => {
  const carToUpdate = await CarModel.findById(id);

  if(!carToUpdate) {
    throw new Error("Car not found:" + id);
  }

  await carToUpdate.set(car).save()

  return true;
}

export const deleteCar = async (id: string) => {
  const carToDelete = await CarModel.findById(id);

  if(!carToDelete) {
    throw new Error("Car not found:" + id);
  }

  await carToDelete.deleteOne();

  return true;
}