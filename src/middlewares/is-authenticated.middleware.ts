import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors";
import jwt from "jsonwebtoken";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ApiError("Missing authorization header with bearer token", 401);
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer" || !token) {
    throw new ApiError(
      "Invalid authorization header format. Accepted format is 'Bearer <token>'",
      401
    );
  }

  const decodedAuthenticatedUser = jwt.verify(token, process.env.JWT_SECRET!);
  res.locals.authenticatedUser = decodedAuthenticatedUser;
  console.log(decodedAuthenticatedUser);
  return next();
}
