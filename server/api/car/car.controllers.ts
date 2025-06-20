import { CarInput } from "../__generated__/graphql";
import Car from "./car.models";

export const carList = async () => {
  const cars = await Car.find();

  return cars
}

export const createCar = async (car: CarInput) => {
  const newCar = await Car.create(car);

  return newCar
}

export const carById = async (id: string) => {
  const car = await Car.findById(id);

  if(!car) {
    throw new Error("Car not found");
  }

  return car;
}

export const updateCar = async (id: string, car: CarInput) => {
  const carToUpdate = await Car.findById(id);

  if(!carToUpdate) {
    throw new Error("Car not found:" + id);
  }

  await carToUpdate.set(car).save()

  return true;
}

export const deleteCar = async (id: string) => {
  const carToDelete = await Car.findById(id);

  if(!carToDelete) {
    throw new Error("Car not found:" + id);
  }

  await carToDelete.deleteOne();

  return true;
}