import { Request, Response } from 'express';
import { authUserService, createUserService, getAllUsersService } from '../services/userService';


export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function auth(req: Request, res: Response): Promise<void> {
  try {
    const users = await authUserService(req.body);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}