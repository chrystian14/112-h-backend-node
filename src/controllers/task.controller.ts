import { Request, Response } from "express";
import type { TaskService } from "../services";

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.authenticatedUser.sub;
    const task = await this.taskService.create(req.body, userId);

    return res.status(201).json(task);
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.authenticatedUser.sub;
    const tasks = await this.taskService.findAll(userId);

    return res.status(200).json(tasks);
  };
}
