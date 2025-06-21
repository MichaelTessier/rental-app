import { Maybe } from "graphql/jsutils/Maybe";
import { FilterQuery } from "mongoose";
import { CarFiltersInput } from "../__generated__/graphql";
import Car from "./car.models";

export const toFilterQuery = (filters: Maybe<CarFiltersInput> | undefined): FilterQuery<Car> => {
  if(!filters) return {}

  const filterQuery: FilterQuery<Car> = {
    ...(filters.status ? { status: filters.status } : {}),
    ...(filters.brand ? { brand: filters.brand } : {}),
    ...(filters.transmission ? { transmission: filters.transmission } : {}),
    ...(filters.fuelType ? { fuelType: filters.fuelType } : {}),
    ...(filters.category ? { category: filters.category } : {}),
    ...(filters.rentPerDay ? {
      rentPerDay: {
        ...(filters.rentPerDay.min ? { $gte: filters.rentPerDay.min } : {}),
        ...(filters.rentPerDay.max ? { $lte: filters.rentPerDay.max } : {}),
      }
    } : {}),
  };

  return filterQuery;
}