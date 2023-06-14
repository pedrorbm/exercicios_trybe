const fs = require('fs').promises;

const lecture = async () => {
  const readMovies = await fs.readFile('./src/movies.json', 'utf-8');
  return readMovies;
};

const result = async () => {
  const learn = await lecture();
  console.log(learn);
};

result();

// module.exports();
