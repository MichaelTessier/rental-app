import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Car: ResolverTypeWrapper<Car>;
  CarBrand: CarBrand;
  CarCategory: CarCategory;
  CarDoors: CarDoors;
  CarFuelType: CarFuelType;
  CarInput: CarInput;
  CarSeats: CarSeats;
  CarStatus: CarStatus;
  CarTransmission: CarTransmission;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  ImageInput: ImageInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Ratings: ResolverTypeWrapper<Ratings>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Car: Car;
  CarInput: CarInput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Image: Image;
  ImageInput: ImageInput;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Ratings: Ratings;
  String: Scalars['String']['output'];
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['CarBrand'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['CarCategory'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  doors?: Resolver<ResolversTypes['CarDoors'], ParentType, ContextType>;
  fuelType?: Resolver<ResolversTypes['CarFuelType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType>;
  millage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratings?: Resolver<Maybe<ResolversTypes['Ratings']>, ParentType, ContextType>;
  rentPerDay?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  seats?: Resolver<ResolversTypes['CarSeats'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CarStatus'], ParentType, ContextType>;
  transmission?: Resolver<ResolversTypes['CarTransmission'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  publicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'input'>>;
  deleteCar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCarArgs, 'id'>>;
  updateCar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryCarArgs, 'id'>>;
  cars?: Resolver<Maybe<Array<ResolversTypes['Car']>>, ParentType, ContextType>;
};

export type RatingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ratings'] = ResolversParentTypes['Ratings']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ratings?: RatingsResolvers<ContextType>;
};

