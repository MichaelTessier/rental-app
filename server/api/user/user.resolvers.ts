import { MutationRegisterUserArgs, UserInput } from "../__generated__/graphql";
import { registerUser } from "./user.controllers";

export const userResolvers = {
  Query: {
    me: async(_root: {}) => {
      return 'context.user';
    }
  },

  Mutation: {
    registerUser: async(_root: {}, args: MutationRegisterUserArgs) => {
      return await registerUser(args.input);    
    }
  }
}