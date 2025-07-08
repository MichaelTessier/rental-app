import { carTypeDefs } from "../api/car/car.typeDefs";
import { commonTypeDefs } from "../api/common/common.typeDefs";
import { carResolvers } from "../api/car/car.resolvers";
import { userTypeDefs } from "../api/user/user.typeDefs";
import { commonResolvers } from "../api/common/common.resolvers";
import { userResolvers } from "../api/user/user.resolvers";

const typeDefs = [
  carTypeDefs,
  commonTypeDefs,
  userTypeDefs,
]

const resolvers = [
  carResolvers, 
  commonResolvers,
  userResolvers,
]

export const schema = {
  typeDefs,
  resolvers,
};