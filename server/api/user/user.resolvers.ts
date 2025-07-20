import { Context } from "../../apollo/context";
import { MutationRegisterUserArgs, MutationLoginArgs, MutationUpdateUserArgs, User } from "../__generated__/graphql";
import { registerUser, login, logout, updateUser  } from "./user.controllers";

export const userResolvers = {
  Query: {
    me: async(_root: {}, _args: {}, context: Context) => {
      return context.user;
    }
  },

  Mutation: {
    login: async(_root: {}, args: MutationLoginArgs, context: Context): Promise<User> => {
      return login(args.input, context);
    },
    logout: async(_root: {}, _args: {}, context: Context): Promise<boolean>  => {
      return logout(context);
    },
    updateUser: async(_root: {}, args: MutationUpdateUserArgs, context: Context): Promise<boolean> => {
      return await updateUser(args.input, context);    
    },
    registerUser: async(_root: {}, args: MutationRegisterUserArgs): Promise<User> => {
      return await registerUser(args.input);    
    },
  }
}