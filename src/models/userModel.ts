import prisma from '../utils/prismaClient';
import { User } from '@prisma/client';

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  return prisma.user.create({ data });
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany();
}
