const express = require('express');
const fs = require('fs').promises;
const lecture = require('./lecture');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'funcionando' }));

app.get('/movies', async (req, res) => {
  const movies = await lecture();
  res.status(200).json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const movies = await lecture();
  const search = movies.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(search);
});

app.post('/movies', async (req, res) => {
  const movies = await lecture();
  movies.push({ ...req.body });
  fs.writeFile('./src/movies.json', JSON.stringify(movies));
  res.status(201).json(movies);
});

app.put('/movies/:id', async (req, res) => {
  const movies = await lecture();
  const search = movies.find(({ movie }) => movie === req.params.id);

  const { movie, price } = req.body;
  search.movie = movie;
  search.price = price;
  fs.writeFile('./src/movies.json', JSON.stringify(movies));
  res.status(200).json(movies);
});

app.delete('/movies/:id', async (req, res) => {
  const movies = await lecture();
  const search = movies.filter(({ id }) => id !== Number(req.params.id));
  console.log(search);
  fs.writeFile('./src/movies.json', JSON.stringify(search));
  res.status(200).json(search);
});

module.exports = app;
