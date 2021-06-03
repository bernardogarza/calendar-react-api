import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.static('public'));

app.use('/api/auth', authRouter);
// TODO: CRUD

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
