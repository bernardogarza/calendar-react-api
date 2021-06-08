import { response } from 'express';
import Event from '../models/Event.js';

export const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEvents',
  });
};

export const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();

    res.json({
      ok: true,
      savedEvent,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Contact the administrator.',
    });
  }
};

export const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvent',
  });
};

export const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvent',
  });
};
