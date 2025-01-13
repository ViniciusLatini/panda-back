import prisma from "../utils/prismaClient";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

export async function createUser(data: Omit<User, "id">): Promise<User> {
  return prisma.user.create({ data });
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}

export async function findUser(
  username: string,
  password: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return null;
  return user;
}
