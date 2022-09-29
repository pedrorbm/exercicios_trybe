
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
  const authorBornIn1947 = (array) => array.find((element) => element.author.birthYear === 1947).author.name;
  
  /* console.log(authorBornIn1947(books)) */
  
  //exercício 2
  const smallerName = (array) => {
    let smallerBook;
    const each = array.forEach((element) => {
      return !smallerBook || element.name.length < smallerBook.length ? smallerBook = element.name : smallerBook = smallerBook;
    })
  
    return smallerBook;
  };
  
  /* console.log(smallerName(books)) */
  
  //exercício 3
  const getNamedBook = (array) => array.find((element) => element.name.length === 26).name;
  
  /* console.log(getNamedBook(books)); */
  
  //exercício 4
  const booksOrderedByReleaseYearDesc = (array) => array.sort((a, b) => a.releaseYear - b.releaseYear);
  
  /* console.log(booksOrderedByReleaseYearDesc(books)); */
  
  //exercício 5
  const everyoneWasBornOnSecXX = (array) => array.every((element) => element.author.birthYear >= 1900 && element.author.birthYear <= 1999);
  
  /* console.log(everyoneWasBornOnSecXX(books)); */
  
  //exercício 6
  const someBookWasReleaseOnThe80s = (array) => array.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
  
  /* console.log(someBookWasReleaseOnThe80s(books)) */
  
  //exercício 7
  const authorUnique = (array) => array.every((element) => array.some((elementSome) => elementSome.author.birthYear === element.author.birthYear && elementSome.author.name !== element.author.name))
  
  console.log(authorUnique(books))