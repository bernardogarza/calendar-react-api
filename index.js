import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
