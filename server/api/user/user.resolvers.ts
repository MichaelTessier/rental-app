import { Context } from "../../apollo/context";
import { MutationRegisterUserArgs, MutationLoginArgs } from "../__generated__/graphql";
import { registerUser, login  } from "./user.controllers";

export const userResolvers = {
  Query: {
    me: async(_root: {}, _args: {}, context: Context) => {
      return context.user;
    }
  },

  Mutation: {
    registerUser: async(_root: {}, args: MutationRegisterUserArgs) => {
      return await registerUser(args.input);    
    },
    login: async(_root: {}, args: MutationLoginArgs, context: Context) => {
      return login(args.input, context);
    }
  }
}