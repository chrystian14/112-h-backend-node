import { prisma } from "../configs/prisma-client.config";
import { ApiError } from "../errors";
import { userWithoutPasswordSchema } from "../schemas";
import type { UserCreate, UserWithoutPassword } from "../types";
import * as bcrypt from "bcryptjs";

export class UserService {
  async create(userCreate: UserCreate): Promise<UserWithoutPassword> {
    const userEmailCount = await prisma.user.count({
      where: { email: userCreate.email },
    });

    if (userEmailCount > 0) {
      throw new ApiError("Email já cadastrado!", 409);
    }

    userCreate.password = await bcrypt.hash(userCreate.password, 10);
    const newUser = await prisma.user.create({ data: userCreate });

    return userWithoutPasswordSchema.parse(newUser);
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    const users = await prisma.user.findMany();

    return userWithoutPasswordSchema.array().parse(users);
  }
}
