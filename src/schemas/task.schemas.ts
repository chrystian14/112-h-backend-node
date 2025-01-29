import { z } from "zod";

export const taskSchema = z.object({
  taskId: z.string().uuid(),
  title: z.string().min(1).max(150),
  completed: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().uuid(),
});

export const taskCreateSchema = taskSchema.pick({
  title: true,
});
