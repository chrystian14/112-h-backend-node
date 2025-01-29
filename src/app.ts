import express from "express";
import "express-async-errors";
import { handleGlobalErrors } from "./middlewares";
import { sessionRouter, taskRouter, userRouter } from "./routes";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/login", sessionRouter);
app.use("/api/tasks", taskRouter);

app.use(handleGlobalErrors);
