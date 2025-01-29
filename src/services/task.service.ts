import { prisma } from "../configs/prisma-client.config";
import { ApiError } from "../errors";
import type { Task, TaskCreate } from "../types";

export class TaskService {
  async create(taskCreate: TaskCreate, userId: string): Promise<Task> {
    const userEmailCount = await prisma.user.count({
      where: { userId },
    });

    if (userEmailCount === 0) {
      throw new ApiError("User not found", 404);
    }

    const newTask = await prisma.task.create({
      data: { ...taskCreate, userId },
    });

    return newTask;
  }

  async findAll(userId: string): Promise<Task[]> {
    return await prisma.task.findMany({ where: { userId } });
  }

  async findAllByUserId(userId: string): Promise<Task[]> {
    return await prisma.task.findMany({
      where: { userId },
    });
  }
}
