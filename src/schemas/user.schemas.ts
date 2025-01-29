import { z } from "zod";

export const userSchema = z.object({
  userId: z.string().uuid(),
  fullName: z.string().min(5).max(150),
  email: z.string().email().max(100),
  password: z.string().min(6).max(64),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userCreateSchema = userSchema.omit({
  userId: true,
  createdAt: true,
  updatedAt: true,
});

export const userWithoutPasswordSchema = userSchema.omit({
  password: true,
});
