import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors";
import { ZodError } from "zod";

export function handleGlobalErrors(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json(err.errors);
  }

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
}
