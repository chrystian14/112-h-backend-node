import { Request, Response } from "express";
import type { SessionService } from "../services";

export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  login = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.sessionService.login(req.body);

    return res.status(200).json(user);
  };
}
