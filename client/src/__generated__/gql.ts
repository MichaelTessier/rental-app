/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment CarList on Car {\n    name\n    category\n    fuelType\n    images {\n      url\n      publicId\n    }\n    id\n    rentPerDay\n    transmission\n    ratings {\n      count\n      value\n    }\n  }\n": typeof types.CarListFragmentDoc,
    "\n  query getCars {\n    cars {\n      ...CarList\n    }\n  }\n": typeof types.GetCarsDocument,
    "\n  fragment Car on Car {\n    id\n    name\n    description\n    status\n    rentPerDay\n    address\n    year\n    power\n    millage\n    brand\n    transmission\n    fuelType\n    seats\n    doors\n    category\n    images {\n      url\n      publicId\n    }\n    createdAt\n    updatedAt\n    ratings {\n      count\n      value\n    }\n  }\n": typeof types.CarFragmentDoc,
    "\n  query getCar($id: String!) {\n    car(id: $id) {\n      ...Car\n    }\n  }\n": typeof types.GetCarDocument,
};
const documents: Documents = {
    "\n  fragment CarList on Car {\n    name\n    category\n    fuelType\n    images {\n      url\n      publicId\n    }\n    id\n    rentPerDay\n    transmission\n    ratings {\n      count\n      value\n    }\n  }\n": types.CarListFragmentDoc,
    "\n  query getCars {\n    cars {\n      ...CarList\n    }\n  }\n": types.GetCarsDocument,
    "\n  fragment Car on Car {\n    id\n    name\n    description\n    status\n    rentPerDay\n    address\n    year\n    power\n    millage\n    brand\n    transmission\n    fuelType\n    seats\n    doors\n    category\n    images {\n      url\n      publicId\n    }\n    createdAt\n    updatedAt\n    ratings {\n      count\n      value\n    }\n  }\n": types.CarFragmentDoc,
    "\n  query getCar($id: String!) {\n    car(id: $id) {\n      ...Car\n    }\n  }\n": types.GetCarDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CarList on Car {\n    name\n    category\n    fuelType\n    images {\n      url\n      publicId\n    }\n    id\n    rentPerDay\n    transmission\n    ratings {\n      count\n      value\n    }\n  }\n"): (typeof documents)["\n  fragment CarList on Car {\n    name\n    category\n    fuelType\n    images {\n      url\n      publicId\n    }\n    id\n    rentPerDay\n    transmission\n    ratings {\n      count\n      value\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCars {\n    cars {\n      ...CarList\n    }\n  }\n"): (typeof documents)["\n  query getCars {\n    cars {\n      ...CarList\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Car on Car {\n    id\n    name\n    description\n    status\n    rentPerDay\n    address\n    year\n    power\n    millage\n    brand\n    transmission\n    fuelType\n    seats\n    doors\n    category\n    images {\n      url\n      publicId\n    }\n    createdAt\n    updatedAt\n    ratings {\n      count\n      value\n    }\n  }\n"): (typeof documents)["\n  fragment Car on Car {\n    id\n    name\n    description\n    status\n    rentPerDay\n    address\n    year\n    power\n    millage\n    brand\n    transmission\n    fuelType\n    seats\n    doors\n    category\n    images {\n      url\n      publicId\n    }\n    createdAt\n    updatedAt\n    ratings {\n      count\n      value\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCar($id: String!) {\n    car(id: $id) {\n      ...Car\n    }\n  }\n"): (typeof documents)["\n  query getCar($id: String!) {\n    car(id: $id) {\n      ...Car\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;