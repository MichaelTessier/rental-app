import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Car = {
  __typename?: 'Car';
  address: Scalars['String']['output'];
  brand: CarBrand;
  category: CarCategory;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  doors: CarDoors;
  fuelType: CarFuelType;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  millage: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  power: Scalars['Int']['output'];
  ratings?: Maybe<Ratings>;
  rentPerDay: Scalars['Float']['output'];
  reviews?: Maybe<Array<Scalars['String']['output']>>;
  seats: CarSeats;
  status: CarStatus;
  transmission: CarTransmission;
  updatedAt: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export enum CarBrand {
  Audi = 'Audi',
  Bmw = 'BMW',
  Chevrolet = 'Chevrolet',
  Ford = 'Ford',
  Honda = 'Honda',
  Hyundai = 'Hyundai',
  Mercedes = 'Mercedes',
  Nissan = 'Nissan',
  Toyota = 'Toyota',
  Volkswagen = 'Volkswagen'
}

export enum CarCategory {
  Convertible = 'Convertible',
  Coupe = 'Coupe',
  Hatchback = 'Hatchback',
  Minivan = 'Minivan',
  Pickup = 'Pickup',
  Suv = 'SUV',
  Sedan = 'Sedan'
}

export enum CarDoors {
  Five = 'Five',
  Four = 'Four',
  Three = 'Three',
  Two = 'Two'
}

export type CarFiltersInput = {
  brand?: InputMaybe<CarBrand>;
  category?: InputMaybe<CarCategory>;
  fuelType?: InputMaybe<CarFuelType>;
  rentPerDay?: InputMaybe<RentPerDayInput>;
  status?: InputMaybe<CarStatus>;
  transmission?: InputMaybe<CarTransmission>;
};

export enum CarFuelType {
  Diesel = 'Diesel',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
  Petrol = 'Petrol'
}

export type CarInput = {
  address: Scalars['String']['input'];
  brand: CarBrand;
  category: CarCategory;
  description: Scalars['String']['input'];
  doors: CarDoors;
  fuelType: CarFuelType;
  images?: InputMaybe<Array<ImageInput>>;
  millage: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  power: Scalars['Int']['input'];
  rentPerDay: Scalars['Float']['input'];
  seats: CarSeats;
  status?: InputMaybe<CarStatus>;
  transmission: CarTransmission;
  year: Scalars['Int']['input'];
};

export enum CarSeats {
  Five = 'Five',
  Four = 'Four',
  Seven = 'Seven',
  Six = 'Six',
  Two = 'Two'
}

export enum CarStatus {
  Archived = 'Archived',
  Draft = 'Draft',
  Published = 'Published'
}

export enum CarTransmission {
  Automatic = 'Automatic',
  Electric = 'Electric',
  Manual = 'Manual',
  SemiAutomatic = 'SemiAutomatic'
}

export type CarsInput = {
  filters?: InputMaybe<CarFiltersInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type CarsOutput = {
  __typename?: 'CarsOutput';
  items: Array<Car>;
  pagination: Pagination;
};

export type Image = {
  __typename?: 'Image';
  publicId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ImageInput = {
  publicId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar?: Maybe<Car>;
  deleteCar?: Maybe<Scalars['Boolean']['output']>;
  updateCar?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCarArgs = {
  input: CarInput;
};


export type MutationDeleteCarArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCarArgs = {
  id: Scalars['String']['input'];
  input: CarInput;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  car?: Maybe<Car>;
  cars?: Maybe<CarsOutput>;
};


export type QueryCarArgs = {
  id: Scalars['String']['input'];
};


export type QueryCarsArgs = {
  input?: InputMaybe<CarsInput>;
};

export type Ratings = {
  __typename?: 'Ratings';
  count: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type RentPerDayInput = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCarsQueryVariables = Exact<{
  input?: InputMaybe<CarsInput>;
}>;


export type GetCarsQuery = { __typename?: 'Query', cars?: { __typename?: 'CarsOutput', items: Array<{ __typename?: 'Car', name: string, category: CarCategory, fuelType: CarFuelType, id: string, rentPerDay: number, transmission: CarTransmission, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null }>, pagination: { __typename?: 'Pagination', total: number, page: number, limit: number } } | null };

export type GetCarQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCarQuery = { __typename?: 'Query', car?: { __typename?: 'Car', id: string, name: string, description: string, status: CarStatus, rentPerDay: number, address: string, year: number, power: number, millage: number, brand: CarBrand, transmission: CarTransmission, fuelType: CarFuelType, seats: CarSeats, doors: CarDoors, category: CarCategory, createdAt: string, updatedAt: string, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null } | null };

export type CarListFragment = { __typename?: 'Car', name: string, category: CarCategory, fuelType: CarFuelType, id: string, rentPerDay: number, transmission: CarTransmission, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null };

export type PaginationFragment = { __typename?: 'Pagination', total: number, page: number, limit: number };

export type CarFragment = { __typename?: 'Car', id: string, name: string, description: string, status: CarStatus, rentPerDay: number, address: string, year: number, power: number, millage: number, brand: CarBrand, transmission: CarTransmission, fuelType: CarFuelType, seats: CarSeats, doors: CarDoors, category: CarCategory, createdAt: string, updatedAt: string, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null };

export const CarListFragmentDoc = gql`
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
    `;
export const PaginationFragmentDoc = gql`
    fragment Pagination on Pagination {
  total
  page
  limit
}
    `;
export const CarFragmentDoc = gql`
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
    `;
export const GetCarsDocument = gql`
    query getCars($input: CarsInput) {
  cars(input: $input) {
    items {
      ...CarList
    }
    pagination {
      ...Pagination
    }
  }
}
    ${CarListFragmentDoc}
${PaginationFragmentDoc}`;

/**
 * __useGetCarsQuery__
 *
 * To run a query within a React component, call `useGetCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCarsQuery(baseOptions?: Apollo.QueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
      }
export function useGetCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
        }
export function useGetCarsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
        }
export type GetCarsQueryHookResult = ReturnType<typeof useGetCarsQuery>;
export type GetCarsLazyQueryHookResult = ReturnType<typeof useGetCarsLazyQuery>;
export type GetCarsSuspenseQueryHookResult = ReturnType<typeof useGetCarsSuspenseQuery>;
export type GetCarsQueryResult = Apollo.QueryResult<GetCarsQuery, GetCarsQueryVariables>;
export const GetCarDocument = gql`
    query getCar($id: String!) {
  car(id: $id) {
    ...Car
  }
}
    ${CarFragmentDoc}`;

/**
 * __useGetCarQuery__
 *
 * To run a query within a React component, call `useGetCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCarQuery(baseOptions: Apollo.QueryHookOptions<GetCarQuery, GetCarQueryVariables> & ({ variables: GetCarQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
      }
export function useGetCarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
        }
export function useGetCarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
        }
export type GetCarQueryHookResult = ReturnType<typeof useGetCarQuery>;
export type GetCarLazyQueryHookResult = ReturnType<typeof useGetCarLazyQuery>;
export type GetCarSuspenseQueryHookResult = ReturnType<typeof useGetCarSuspenseQuery>;
export type GetCarQueryResult = Apollo.QueryResult<GetCarQuery, GetCarQueryVariables>;