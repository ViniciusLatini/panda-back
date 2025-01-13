import { Router } from "express";
import { getVideosByUser } from "../controllers/videoController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router: Router = Router();

router.get("/", authenticateToken, getVideosByUser); 

export default router;
