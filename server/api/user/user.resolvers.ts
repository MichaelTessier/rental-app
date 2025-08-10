import { Context } from "../../apollo/context";
import { MutationRegisterUserArgs, MutationLoginArgs, MutationUpdateUserArgs, User, MutationUpdatePasswordArgs, MutationUpdateAvatarArgs, Image, MutationForgotPasswordArgs } from "../__generated__/graphql";
import { registerUser, login, logout, updateUser, updatePassword, updateAvatar, forgotPassword  } from "./user.controllers";

export const userResolvers = {
  Query: {
    me: async(_root: {}, _args: {}, context: Context) => {
      console.log("🚀 ~ me:async ~ context:", context.user)
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
    updatePassword: async(_root: {}, args: MutationUpdatePasswordArgs, context: Context): Promise<boolean> => {
      return await updatePassword(args.input, context);    
    },
    forgotPassword: async(_root: {}, args: MutationForgotPasswordArgs): Promise<boolean> => {
      return await forgotPassword(args.input);    
    },
    updateAvatar: async(_root: {}, args: MutationUpdateAvatarArgs, context: Context): Promise<Image> => {
      return await updateAvatar(args.input, context);    
    },
    registerUser: async(_root: {}, args: MutationRegisterUserArgs): Promise<User> => {
      return await registerUser(args.input);    
    },
    
  }
}