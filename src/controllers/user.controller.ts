import { Request, Response } from "express";
import type { TaskService, UserService } from "../services";

export class UserController {
  constructor(private readonly userService: UserService) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.userService.create(req.body);

    return res.status(201).json(user);
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    const users = await this.userService.findAll();

    return res.status(200).json(users);
  };
}
