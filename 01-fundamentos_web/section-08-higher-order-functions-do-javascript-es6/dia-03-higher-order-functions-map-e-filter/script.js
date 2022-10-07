
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];
  
// Adicione o código do exercício aqui:
//exercício 1
const formatedBookNames = (array) => {
    return array.map((element) => (`Nome do livro: ${element.name} | Gênero: ${element.genre} | Autor: ${element.author.name}`));
};
;
/* console.log(formatedBookNames(books)); */

//exercício 2
const ageAuthor = (array) => {
    return array.map((element) => ({age: (element.releaseYear - element.author.birthYear), author: (element.author.name)})).sort((a, b) => a.age > b.age ? 1 : -1);
};

/* console.log(ageAuthor(books)); */

//exercício 3
const genre = (array) => {
    return array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
};

/* console.log(genre(books)); */

//exercício 4
const yearPublished = (array) => {
    return array.filter((element) => (2022 - element.releaseYear) > 60).sort((a, b) => a.releaseYear > b.releaseYear ? 1 : -1);
};

/* console.log(yearPublished(books)); */

//exercício 5
const authorGenre = (array) => {
    return array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica').map((element) => element.author.name).sort((a, b) => a > b ? 1 : -1);
};

/* console.log(authorGenre(books)); */

//exercício 6
const oldBooks = (array) => {
    return array.filter((element) => (2022 - element.releaseYear) > 60).map((element) => element.name);
};

/* console.log(oldBooks(books)); */
