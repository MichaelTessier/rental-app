import type { Request, Response } from "express";

export interface Context {
  req: Request;
  res: Response;
}

export async function buildContext({ req, res }: { req: Request; res: Response }): Promise<Context> {
  return {
    req,
    res,
  };
}