/* const testingScope = (escopo) => {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    if (escopo === true) {
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
      console.log(elseScope);
    };
};

testingScope(true); */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => {
    return (a - b);
};

let order = oddsAndEvens.sort(sortOddsAndEvens);

console.log(`Os números ${order} se encontram ordenados de forma crescente!`); */

const fatorial = (num) => {
    let result = 0;
    for (let index = 1; index < num; index += 1) {
        let finish = num * (num - index);
        result += finish;
    };
    return result;
};

console.log(`Esse é o fatorial: ${fatorial(4)}`)
