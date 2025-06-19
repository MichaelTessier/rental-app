import { carTypeDefs } from "../api/car/car.typeDefs";
import { commonTypeDefs } from "../api/common/common.typeDefs";
import { carResolvers } from "../api/car/car.resolvers";

const typeDefs = [
  carTypeDefs,
  commonTypeDefs
]

const resolvers = [carResolvers]

export const schema = {
  typeDefs,
  resolvers,
};