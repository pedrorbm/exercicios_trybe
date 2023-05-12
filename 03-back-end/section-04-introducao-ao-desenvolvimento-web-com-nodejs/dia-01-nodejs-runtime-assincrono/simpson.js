const fs = require('fs').promises;

const readFile = async () => {
  const read = await fs.readFile('./simpsons.json', 'utf-8');
  return read;
};

const readFileFamily = async () => {
  const read = fs.readFile('./simpsonFamily.json', 'utf-8');
  return read;
};

const simpsonsAll = async () => {
  const fileSimpsons = await readFile();
  const convertJs = JSON.parse(fileSimpsons);
  const simpson = convertJs.map((simpson) => {
    console.log(`${simpson.id} - ${simpson.name}`)
  });
  return simpson;
};

const simpsonOne = async (id) => {
  const fileSimpsons = await readFile();
  const convertJs = JSON.parse(fileSimpsons);
  const result = convertJs.find((simpson) => Number(simpson.id) === id);

  if (!result) {
    throw new Error('id não encontrado')
  }

  return console.log(`${result.id} - ${result.name}`);
};

const simpsonRemove = async (id1, id2) => {
  const fileSimpsons = await readFile();
  const convertJs = JSON.parse(fileSimpsons);
  const result = convertJs.filter((simpson) => {
    const comparison = Number(simpson.id) !== id1 && Number(simpson.id) !== id2;
    return comparison;
  });

  return fs.writeFile('./simpsons.json', JSON.stringify(result));
};

const simpsonsNewFile = async () => {
  const fileSimpsons = await readFile();
  const convertJs = JSON.parse(fileSimpsons);
  const simpsonsList = convertJs.filter((simpson) => {
    newList = simpson.id < 5;
    return newList;
  });

  return fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonsList));
};

const simpsonAdd = async () => {
  const fileSimpsons = await readFileFamily();
  const convertJs = JSON.parse(fileSimpsons);
  convertJs.push({ 'id': 5, 'name': 'Nelson Muntz' });

  return fs.writeFile('./simpsonFamily.json', JSON.stringify(convertJs));
};

const simpsonTrade = async () => {
  const fileSimpsons = await readFileFamily();
  const convertJs = JSON.parse(fileSimpsons);
  const trade = convertJs.filter((simpson) => Number(simpson.id) !== 5);

  trade.push({ 'id': 20, 'name': 'Maggie Simpson' })
  return fs.writeFile('./simpsonFamily.json', JSON.stringify(trade))
};

const main = async () => {
  //simpsonsAll();
  //simpsonOne(3);
  //simpsonRemove(10,6);
  //simpsonsNewFile();
  //simpsonAdd();
  simpsonTrade();
};

main();
