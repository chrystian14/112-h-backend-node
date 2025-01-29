import type { z } from "zod";
import type {
  userCreateSchema,
  userSchema,
  userWithoutPasswordSchema,
} from "../schemas";

export type User = z.infer<typeof userSchema>;
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserWithoutPassword = z.infer<typeof userWithoutPasswordSchema>;
