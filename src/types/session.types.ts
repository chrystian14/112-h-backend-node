import type { z } from "zod";
import type { loginCreateSchema, loginResponseSchema } from "../schemas";

export type LoginCreate = z.infer<typeof loginCreateSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
