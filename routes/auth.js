import { Router } from 'express';
import { createUser, loginUser, renewToken } from '../controllers/auth.js';

/**
 * User Routes
 *
 * host + /api/auth/...
 */
const router = Router();

router.post('/new', createUser);

router.post('/', loginUser);

router.get('/renew', renewToken);

export default router;
