import { GraphQLError } from "graphql";
import { Maybe, User, UserInput } from "../__generated__/graphql";
import { UserModel } from "./user.models";

export const registerUser = async(user: Maybe<UserInput> | undefined): Promise<User> => {
  try {
    const newUser = UserModel.create(user)

    return newUser
  } catch (error) {
    throw new GraphQLError('Error creating user', {
      extensions: {
        error,
      },
    });
  }

}