import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  DateTime: { input: Date; output: Date; }
  EmailAddress: { input: string; output: string; }
  ObjectID: { input: string; output: string; }
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
  id: Scalars['ObjectID']['output'];
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

export enum ErrorCode {
  BadRequest = 'BAD_REQUEST',
  Conflict = 'CONFLICT',
  Forbidden = 'FORBIDDEN',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  NotFound = 'NOT_FOUND',
  Unauthorized = 'UNAUTHORIZED'
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

export type LoginInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar?: Maybe<Car>;
  deleteCar?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<User>;
  registerUser: User;
  updateCar?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCarArgs = {
  input: CarInput;
};


export type MutationDeleteCarArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterUserArgs = {
  input: UserInput;
};


export type MutationUpdateCarArgs = {
  id: Scalars['ObjectID']['input'];
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
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCarArgs = {
  id: Scalars['ObjectID']['input'];
};


export type QueryCarsArgs = {
  input?: InputMaybe<CarsInput>;
};


export type QueryUserArgs = {
  id: Scalars['ObjectID']['input'];
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

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Image>;
  createdAt: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  resetPasswordExpires?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Array<UserRole>>;
  updatedAt: Scalars['String']['output'];
};

export type UserInput = {
  avatar?: InputMaybe<ImageInput>;
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Array<UserRole>>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}



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
  CarFiltersInput: CarFiltersInput;
  CarFuelType: CarFuelType;
  CarInput: CarInput;
  CarSeats: CarSeats;
  CarStatus: CarStatus;
  CarTransmission: CarTransmission;
  CarsInput: CarsInput;
  CarsOutput: ResolverTypeWrapper<CarsOutput>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  ErrorCode: ErrorCode;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Image: ResolverTypeWrapper<Image>;
  ImageInput: ImageInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']['output']>;
  Pagination: ResolverTypeWrapper<Pagination>;
  Query: ResolverTypeWrapper<{}>;
  Ratings: ResolverTypeWrapper<Ratings>;
  RentPerDayInput: RentPerDayInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Car: Car;
  CarFiltersInput: CarFiltersInput;
  CarInput: CarInput;
  CarsInput: CarsInput;
  CarsOutput: CarsOutput;
  DateTime: Scalars['DateTime']['output'];
  EmailAddress: Scalars['EmailAddress']['output'];
  Float: Scalars['Float']['output'];
  Image: Image;
  ImageInput: ImageInput;
  Int: Scalars['Int']['output'];
  LoginInput: LoginInput;
  Mutation: {};
  ObjectID: Scalars['ObjectID']['output'];
  Pagination: Pagination;
  Query: {};
  Ratings: Ratings;
  RentPerDayInput: RentPerDayInput;
  String: Scalars['String']['output'];
  User: User;
  UserInput: UserInput;
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['CarBrand'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['CarCategory'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  doors?: Resolver<ResolversTypes['CarDoors'], ParentType, ContextType>;
  fuelType?: Resolver<ResolversTypes['CarFuelType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
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

export type CarsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarsOutput'] = ResolversParentTypes['CarsOutput']> = {
  items?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  publicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCar?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<MutationCreateCarArgs, 'input'>>;
  deleteCar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCarArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  registerUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
  updateCar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'id' | 'input'>>;
};

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  car?: Resolver<Maybe<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryCarArgs, 'id'>>;
  cars?: Resolver<Maybe<ResolversTypes['CarsOutput']>, ParentType, ContextType, Partial<QueryCarsArgs>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
};

export type RatingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ratings'] = ResolversParentTypes['Ratings']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetPasswordExpires?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  resetPasswordToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<Array<ResolversTypes['UserRole']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  CarsOutput?: CarsOutputResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ratings?: RatingsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

