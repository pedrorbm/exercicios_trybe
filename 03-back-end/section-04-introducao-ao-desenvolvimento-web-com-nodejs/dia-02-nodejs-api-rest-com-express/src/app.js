const express = require('express');
const fs = require('fs').promises;
const lecture = require('./lecture');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'funcionando' }));

app.get('/movies', async (req, res) => {
  try {
    const movies = await lecture();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await lecture();
    const search = movies.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(search);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await lecture();
    movies.push({ ...req.body });
    await fs.writeFile('./src/movies.json', JSON.stringify(movies));
    res.status(201).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await lecture();
    const search = movies.find(({ movie }) => movie === req.params.id);
    const { movie, price } = req.body;
    search.movie = movie;
    search.price = price;
    await fs.writeFile('./src/movies.json', JSON.stringify(movies));
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await lecture();
    const search = movies.filter(({ id }) => id !== Number(req.params.id));
    await fs.writeFile('./src/movies.json', JSON.stringify(search));
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
