import { GraphQLError } from "graphql";
import { LoginInput, Maybe, User, RegisterUserInput, UpdateUserInput, UpdatePasswordInput } from "../__generated__/graphql";
import { UserModel } from "./user.models";
import { Context } from "../../apollo/context";
import { NotFoundError, UnauthorizedError } from "../error";
import jwt from "jsonwebtoken";
import jwtConfig from "../../services/jwt/jwt.config";
import { USER_TOKEN_COOKIE_NAME } from "./user.const";

export const login = async(input: Maybe<LoginInput> | undefined, context: Context): Promise<User> => {
  try {
    const user = await UserModel.findOne({ email: input?.email }).select('+password');

    if(!user) {
      throw new NotFoundError('User not found');
    }

    const isPasswordValid = await user.comparePassword(input?.password || '');

    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid password');
    }
    
    const token = jwt.sign(
      { 
        id: user._id, 
      },
      jwtConfig.jwtToken, 
      {
        expiresIn: jwtConfig.jwtExpiration,
      }
    )

    context.res.cookie(USER_TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: jwtConfig.jwtExpiration * 1000, 
      sameSite: 'strict', 
    });


    return user;
  } catch (error) {
    throw new GraphQLError('Error login user', {
      extensions: {
        error,
      },
    });
  }
}

export const logout = (context: Context): boolean => {
  try {
    context.res.cookie(USER_TOKEN_COOKIE_NAME, null, {
      maxAge: 0, 
    });

    return true;
  } catch (error) {
    throw new GraphQLError('Error logout user', {
      extensions: {
        error,
      },
    });
  }
}

export const registerUser = async(user: RegisterUserInput): Promise<User> => {
  try {
    const newUser = await UserModel.create(user)

    return newUser
  } catch (error) {
    throw new GraphQLError('Error creating user', {
      extensions: {
        error,
      },
    });
  }
}

export const updateUser = async(input: UpdateUserInput, context: Context): Promise<boolean> => {
  try {
    const user = await UserModel.findById(context.user?.id)
    
    if(!user) {
      throw new NotFoundError('User not found');
    }
    
    await user.updateOne(input)
    
    return true
  } catch (error) {
    throw new GraphQLError('Error updating user', {
      extensions: {
        error,
      },
    });
  }
}

export const updatePassword = async(input: UpdatePasswordInput, context: Context): Promise<boolean> => {
  try {
    const user = await UserModel.findById(context.user?.id).select('+password')
    
    if(!user) {
      throw new NotFoundError('User not found');
    }

    const isPasswordMatched = await user.comparePassword(input.oldPassword)

    if (!isPasswordMatched) {
      throw new UnauthorizedError('Invalid password');
    }

    user.password = input.newPassword
    
    await user.save()
    
    return true
  } catch (error) {
    throw new GraphQLError('Error updating password', {
      extensions: {
        error,
      },
    });
  }
}
