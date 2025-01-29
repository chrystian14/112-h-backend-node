import type { z } from "zod";
import type { taskCreateSchema, taskSchema } from "../schemas";

export type Task = z.infer<typeof taskSchema>;
export type TaskCreate = z.infer<typeof taskCreateSchema>;
