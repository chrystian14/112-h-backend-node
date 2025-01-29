import { userSchema } from "./user.schemas";
import { z } from "zod";

export const loginCreateSchema = userSchema.pick({
  email: true,
  password: true,
});

export const loginResponseSchema = userSchema
  .pick({
    fullName: true,
    userId: true,
  })
  .extend({ accessToken: z.string() });
