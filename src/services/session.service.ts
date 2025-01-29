import { prisma } from "../configs/prisma-client.config";
import { ApiError } from "../errors";
import type { LoginCreate } from "../types";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { LoginResponse } from "../types/session.types";

export class SessionService {
  async login(loginCreate: LoginCreate): Promise<LoginResponse> {
    const user = await prisma.user.findUnique({
      where: { email: loginCreate.email },
    });

    if (!user) {
      throw new ApiError("Invalid credentials", 401);
    }

    const passwordIsCorrect = await bcrypt.compare(
      loginCreate.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new ApiError("Invalid credentials", 401);
    }

    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(
      { fullName: user.fullName, email: user.email },
      secret,
      { expiresIn: "1h", subject: user.userId }
    );

    // return token;
    return {
      accessToken: token,
      fullName: user.fullName,
      userId: user.userId,
    };
  }
}
