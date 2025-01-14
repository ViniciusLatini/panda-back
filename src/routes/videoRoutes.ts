import { Router } from "express";
import { getVideoById, getVideosByUser } from "../controllers/videoController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router: Router = Router();

router.get("/", authenticateToken, getVideosByUser); 
router.get("/:id", authenticateToken, getVideoById);

export default router;
