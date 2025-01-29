import { Router } from "express";
import { UserController } from "../controllers";
import { validateBody } from "../middlewares";
import { userCreateSchema } from "../schemas";
import { TaskService, UserService } from "../services";

export const userRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

userRouter.post("", validateBody(userCreateSchema), userController.create);
userRouter.get("", userController.findAll);
