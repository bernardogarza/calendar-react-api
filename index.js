import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
