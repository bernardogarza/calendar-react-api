import { Router } from 'express';
import { jwtValidator } from '../middlewares/jwt-validator.js';

import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';

/**
 * Event Routes
 *
 * host + /api/events/...
 */

const router = Router();

router.use(jwtValidator);

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

export default router;
