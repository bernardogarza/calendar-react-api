import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, loginUser, renewToken } from '../controllers/auth.js';

/**
 * User Routes
 *
 * host + /api/auth/...
 */
const router = Router();

router.post(
  '/new',
  [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  ],
  createUser,
);

router.post(
  '/',
  [
    check('email', 'Invalid email or password').isEmail(),
    check('password', 'Invalid email or password').isLength({ min: 6 }),
  ],
  loginUser,
);

router.get('/renew', renewToken);

export default router;
