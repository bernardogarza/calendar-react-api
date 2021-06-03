import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, loginUser, renewToken } from '../controllers/auth.js';
import { validator } from '../middlewares/validator.js';

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
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    validator,
  ],
  createUser,
);

router.post(
  '/',
  [
    check('email', 'Invalid email or password').isEmail(),
    check('password', 'Invalid email or password').isLength({ min: 6 }),
    validator,
  ],
  loginUser,
);

router.get('/renew', renewToken);

export default router;
