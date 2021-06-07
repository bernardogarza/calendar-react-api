import jwt from 'jsonwebtoken';

/**
 *
 * @param {string} uid - user id
 * @param {string} name - user name
 * @returns promise
 */

export const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Unable to generate token');
        }

        resolve(token);
      },
    );
  });
};
