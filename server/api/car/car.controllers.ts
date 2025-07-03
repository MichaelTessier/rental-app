import { GraphQLError } from "graphql";
import { Car, CarInput, CarsInput, CarsOutput, Maybe } from "../__generated__/graphql";
import QueryService from "../services/query.service";
import CarModel from "./car.models";
import { toFilterQuery } from "./car.utils";
import { NotFoundError } from "../error";


export const carList = async (args: Maybe<CarsInput> | undefined): Promise<CarsOutput> => {
  try {
    const queryService = new QueryService<Car>(CarModel);
    
    await queryService.search(args?.query).filters(toFilterQuery(args?.filters)).paginate(args?.page, args?.limit)

    const cars = await queryService.response;

    return { 
      items: cars,
      pagination: queryService.pagination
    }
  } catch (error) {
    throw new GraphQLError('Error fetching cars', {
      extensions: {
        error,
      },
    });
  }
}

export const createCar = async (car: CarInput) => {
  try {
    const newCar = await CarModel.create(car);

    return newCar
  } catch (error) {
    throw new GraphQLError('Error creating car', {
      extensions: {
        error,
      },
    });
  }
}

export const carById = async (id: string): Promise<Car> => {
  try {
    const car = await CarModel.findById(id);

    if(!car) {
      throw new NotFoundError(`Car not found: ${id}`);
    }

    return car;

  } catch (error) {
    throw new GraphQLError('Error getting car', {
      extensions: {
        error,
      },
    });

  }
}

export const updateCar = async (id: string, car: CarInput): Promise<boolean> => {
  try {
    const carToUpdate = await CarModel.findById(id);

    if(!carToUpdate) {
      throw new NotFoundError(`Car not found: ${id}`);
    }

    await carToUpdate.set(car).save()

    return true;
    
  } catch (error) {
    throw new GraphQLError('Error updating car', {
      extensions: {
        error,
      },
    });
  }
}

export const deleteCar = async (id: string): Promise<boolean> => {
  try {
    const carToDelete = await CarModel.findById(id);

    if(!carToDelete) {
      throw new NotFoundError(`Car not found: ${id}`);
    }

    await carToDelete?.deleteOne();

    return true;

  } catch(error) {
    throw new GraphQLError('Error deleting car', {
      extensions: {
        error,
      },
    });
  }
}