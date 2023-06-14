const express = require('express');
const lecture = require('./lecture');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'funcionando' }));

app.get('/movies/:id', async (req, res) => {
  const movies = await lecture();
  const search = movies.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(search);
});

module.exports = app;
