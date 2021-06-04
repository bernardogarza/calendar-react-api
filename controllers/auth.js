import { response } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';

export const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email is already in use.',
      });
    }

    user = new User(req.body);
    //Encrypt
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Please contact the page administrator.',
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
