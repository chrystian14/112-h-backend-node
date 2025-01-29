import { Router } from "express";
import { SessionController } from "../controllers";
import { SessionService } from "../services";

export const sessionRouter = Router();

const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);

sessionRouter.post("", sessionController.login);
