export interface IErrorResponse {
  message: string;
  statusCode: number;
  status: string;
  serializeErrors(): IError;
}

export interface IError {
  message: string;
  statusCode: number;
  status: string;
}

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string) {
    super(message);
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}

export class JoiRequestValidationError extends CustomError {
  statusCode = 400;
  status = 'failed';

  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends CustomError {
  statusCode = 400;
  status = 'failed';

  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends CustomError {
  statusCode = 404;
  status = 'failed';

  constructor(message: string) {
    super(message);
  }
}

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  status = 'failed';

  constructor(message: string) {
    super(message);
  }
}

export class FileTooLargeError extends CustomError {
  statusCode = 413;
  status = 'failed';

  constructor(message: string) {
    super(message);
  }
}

export class ServerError extends CustomError {
  statusCode = 503;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}
