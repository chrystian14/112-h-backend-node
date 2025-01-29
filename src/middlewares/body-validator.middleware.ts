import { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

export function validateBody(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const parseResult = schema.parse(req.body);
    req.body = parseResult;

    return next();
  };
}
