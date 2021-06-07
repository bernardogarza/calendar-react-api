import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import eventRouter from './routes/events.js';
import { dbConnection } from './db/config.js';
import cors from 'cors';

dotenv.config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
