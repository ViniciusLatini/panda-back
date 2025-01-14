import { Router } from "express";
import { editVideoInfo, getVideoById, getVideosByUser } from "../controllers/videoController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router: Router = Router();

router.get("/", authenticateToken, getVideosByUser); 
router.get("/:id", authenticateToken, getVideoById);
router.put("/:id", authenticateToken, editVideoInfo);

export default router;
