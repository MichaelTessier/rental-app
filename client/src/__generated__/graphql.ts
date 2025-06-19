/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type Query = {
  __typename?: 'Query';
  car?: Maybe<Car>;
  cars?: Maybe<Array<Car>>;
};


export type QueryCarArgs = {
  id: Scalars['String']['input'];
};

export type Ratings = {
  __typename?: 'Ratings';
  count: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type CarListFragment = { __typename?: 'Car', name: string, category: CarCategory, fuelType: CarFuelType, id: string, rentPerDay: number, transmission: CarTransmission, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null } & { ' $fragmentName'?: 'CarListFragment' };

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = { __typename?: 'Query', cars?: Array<(
    { __typename?: 'Car' }
    & { ' $fragmentRefs'?: { 'CarListFragment': CarListFragment } }
  )> | null };

export type CarFragment = { __typename?: 'Car', id: string, name: string, description: string, status: CarStatus, rentPerDay: number, address: string, year: number, power: number, millage: number, brand: CarBrand, transmission: CarTransmission, fuelType: CarFuelType, seats: CarSeats, doors: CarDoors, category: CarCategory, createdAt: string, updatedAt: string, images?: Array<{ __typename?: 'Image', url: string, publicId: string }> | null, ratings?: { __typename?: 'Ratings', count: number, value: number } | null } & { ' $fragmentName'?: 'CarFragment' };

export type GetCarQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCarQuery = { __typename?: 'Query', car?: (
    { __typename?: 'Car' }
    & { ' $fragmentRefs'?: { 'CarFragment': CarFragment } }
  ) | null };

export const CarListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Car"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rentPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CarListFragment, unknown>;
export const CarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Car"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Car"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"rentPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"millage"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"doors"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CarFragment, unknown>;
export const GetCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Car"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rentPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCarsQuery, GetCarsQueryVariables>;
export const GetCarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"car"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Car"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Car"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Car"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"rentPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"millage"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"fuelType"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"doors"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCarQuery, GetCarQueryVariables>;