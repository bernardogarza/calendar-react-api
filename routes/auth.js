import { Router } from 'express';

/**
 * User Routes
 *
 * host + /api/auth
 */
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
  });
});

export default router;
