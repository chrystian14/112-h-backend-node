import { Router } from "express";
import { TaskController } from "../controllers";
import { TaskService } from "../services";
import { isAuthenticated, validateBody } from "../middlewares";
import { taskCreateSchema } from "../schemas";

export const taskRouter = Router();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskRouter.post(
  "",
  isAuthenticated,
  validateBody(taskCreateSchema),
  taskController.create
);
taskRouter.get("", isAuthenticated, taskController.findAll);
