import { Router } from 'express';
import { createUser, getAllUsers, auth } from '../controllers/userController';

const router: Router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.post('/auth', auth)

export default router;
