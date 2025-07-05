import { Context } from "../../apollo/context";
import { MutationRegisterUserArgs, QueryLoginArgs, UserInput } from "../__generated__/graphql";
import { registerUser, login  } from "./user.controllers";

export const userResolvers = {
  Query: {
    me: async(_root: {}) => {
      return 'context.user';
    },
    login: async(_root: {}, args: QueryLoginArgs, context: Context) => {
      return login(args.input, context);
    }
  },

  Mutation: {
    registerUser: async(_root: {}, args: MutationRegisterUserArgs) => {
      return await registerUser(args.input);    
    }
  }
}