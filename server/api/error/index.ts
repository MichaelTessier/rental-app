import { ErrorCode } from "../__generated__/graphql";

class CustomError extends Error {
  code: any;

  constructor(message: string, code: any) {
    super(message);
    this.code = code;
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCode.NotFound);
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message, ErrorCode.BadRequest);
  }
}

export const isMongoError = (error: any): boolean => {
  return error?.name === 'CastError' || error?.name === 'ValidationError';
}

