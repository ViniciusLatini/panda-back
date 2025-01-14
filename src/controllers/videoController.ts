import { NextFunction, Request, Response } from 'express';
import { getAllUserVideosService, getVideoByIdService } from '../services/videoService';

export async function getVideosByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const videos = await getAllUserVideosService();
    res.status(200).json(videos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getVideoById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const video = await getVideoByIdService(id);
    res.status(200).json(video);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}