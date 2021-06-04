import { response } from 'express';
import User from '../models/User.js';

export const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'register',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Email is already in use.',
    });
  }
};

export const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

export const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};
