//let info = {
    //personagem: 'Margarida',
    //origem: 'Pato Donald',
    //nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//};

//exercício 1
//let saudacao = 'Bem-vinda, ' + info['personagem'];

//console.log(saudacao);

//exercício 2
//info['recorrente'] = 'Sim';

//console.log(info);

//exercício 3
//for (let key in info) {
    //console.log(key);
//};

//exercício 4
//for (let key in info) {
    //console.log(info[key]);
//};

//exercício 5
//let info = {
    //personagem: 'Tio Patinhas',
    //origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    //nota: 'O último MacPatinhas',
    //recorrente: 'Sim'
//};

//for (let key in info) {
    //console.log(key, info[key]);
//};

//exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let fullName = leitor['nome'] + ' ' + leitor['sobrenome'];
let title = leitor['livrosFavoritos'][0]['titulo'];

console.log('O livro favorito de ' + fullName + ' se chama ' + title + '.')

//exercício 7

let livroAdicionar = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor['livrosFavoritos'].push(livroAdicionar)

console.log(leitor);

//sexercício 8
let nome = leitor['nome'];
let livros = leitor['livrosFavoritos'].length

console.log(nome + ' tem ' + livros + ' livros favoritos')