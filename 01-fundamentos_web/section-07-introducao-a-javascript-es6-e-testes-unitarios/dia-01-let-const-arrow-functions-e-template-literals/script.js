//exercício 1
const testingScope = (escopo) => {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    if (escopo === true) {
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
      console.log(elseScope);
    };
};

/* (testingScope(true)); */

//exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => {
    return (a - b);
};

let order = oddsAndEvens.sort(sortOddsAndEvens);

/* console.log(`Os números ${order} se encontram ordenados de forma crescente!`); */

//exercício 3
const fatorial = (num) => {
    let result = 0;
    for (let index = 1; index < num; index += 1) {
        let finish = num * (num - index);
        result += finish;
    };

    return result;
};

/* console.log(`Esse é o fatorial: ${fatorial(4)}`); */

//exercício 4
const longestWord = (phrase) => {
  let bigWord = ' ';
  const split = phrase.split(' ');

  for (const through of split) {
    if (through.length > bigWord.length) {
      bigWord = through   
    }  
  };

  return bigWord;
};

/* console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) */

//exercício 5
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const split = frase.replace('x', nome);
  
  return split;
};

const minhasSkills = (callback) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  /* const split = skills.split(' '); */
  let result = `  ${callback('Pedro')}
  Minhas três principais habilidades são:
  *${skills[0]}
  *${skills[1]}
  *${skills[2]}`;
  
  return result;
};

console.log(minhasSkills(substituaX))
