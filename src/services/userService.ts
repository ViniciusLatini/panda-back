import { User } from "@prisma/client";
import { createUser, findUser, getAllUsers } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserAuth } from "../types/user";

function generateToken(userId: number): string {
  const expiresIn = "1h";
  return jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn });
}

export async function createUserService(data: Omit<User, "id">): Promise<User> {
  if (!data.username || !data.password) {
    throw new Error("Username and password are required");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await createUser({ ...data, password: hashedPassword });
}

export async function getAllUsersService(): Promise<User[]> {
  return await getAllUsers();
}

export async function authUserService(data: Omit<User, "id">): Promise<UserAuth> {
  if (!data.username || !data.password) {
    throw new Error("Username and password are required");
  }
  const user = await findUser(data.username, data.password);

  if (!user) throw new Error("Invalid credentials");

  const token = generateToken(user.id);

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
    },
  }
}
