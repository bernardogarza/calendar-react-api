import { Router } from 'express';
import { jwtValidator } from '../middlewares/jwt-validator.js';
import { check } from 'express-validator';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';
import { validator } from '../middlewares/validator.js';
import { isDate } from '../helpers/isDate.js';

/**
 * Event Routes
 *
 * host + /api/events/...
 */

const router = Router();

router.use(jwtValidator);

router.get('/', getEvents);

router.post(
  '/',
  [
    check('title', 'Title is required.').not().isEmpty(),
    check('start', 'Start date is required.').custom(isDate),
    check('end', 'End date is required.').custom(isDate),
    validator,
  ],
  createEvent,
);

router.put(
  '/:id',
  [
    check('title', 'Title is required.').not().isEmpty(),
    check('start', 'Start date is required.').custom(isDate),
    check('end', 'End date is required.').custom(isDate),
    validator,
  ],
  updateEvent,
);

router.delete('/:id', deleteEvent);

export default router;
