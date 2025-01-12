import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);

export default router;
