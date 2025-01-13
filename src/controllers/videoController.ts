import { NextFunction, Request, Response } from 'express';
import { getAllUserVideosService } from '../services/videoService';

export async function getVideosByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const videos = await getAllUserVideosService();
    res.status(200).json(videos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}