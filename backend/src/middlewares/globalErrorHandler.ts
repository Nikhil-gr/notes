import type { NextFunction, Request, Response } from "express";
import type { HttpError } from "http-errors";
import envConfig from "../config/config.js";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message,
    errorStack:
      envConfig.environment === "development"
        ? err.stack
        : "Something went wrong",
  });
};

export default globalErrorHandler;
