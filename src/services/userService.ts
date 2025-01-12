import { User } from "@prisma/client";
import { createUser, getAllUsers } from "../models/userModel";
import bcrypt from "bcrypt";

export async function createUserService(data: Omit<User, "id">): Promise<User> {
  if (!data.username || !data.password) {
    throw new Error("Username and password are required");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await createUser({...data, password: hashedPassword});
}

export async function getAllUsersService(): Promise<User[]> {
  return await getAllUsers();
}
