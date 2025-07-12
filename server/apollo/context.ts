import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "@/api/__generated__/graphql";
import { USER_TOKEN_COOKIE_NAME } from "../api/user/user.const";
import { UserModel } from "../api/user/user.models";
import { NotFoundError, UnauthorizedError } from "../api/error";

export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}

export async function buildContext({ req, res }: { req: Request; res: Response }): Promise<Context> {
  const token = req.cookies[USER_TOKEN_COOKIE_NAME] || null;
  const user = await getUserFromToken(token) 

  return {
    req,
    res,
    user,
  };
}

async function getUserFromToken(token?: string): Promise<User | null> {
  if(!token) return null;

  let user = null 

  if (token && process.env.JWT_SECRET) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };

      user = await UserModel.findById(decoded?.id) 

      if(!user) {
         throw new NotFoundError('User not found');
      }
    } catch (error) {
      throw new UnauthorizedError('Invalid token');
    }
  }

  return user
}