//exercício 1
let numero = 10;
let resultado = 0;

for (index = 10; index >= 0; index -= 2) {
    let fatorial = index * (index - 1);
    resultado += fatorial;
}

console.log(resultado);

//exercicio 2
let word = 'tryber';
let trocar = '';

for (index = word.length - 1; index >= 0; index -= 1) {
    trocar += word[index];
}

console.log(trocar);

//exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (index = 0; index < array.length; index += 1) {
    let maiorMenor = array[index];
    if (maiorMenor.length > maior.length) {
        maior = maiorMenor;
    } else {
        menor = maiorMenor;
    }
}

console.log(maior);
console.log(menor);

//exercicio 4
let numPrimo = 0;

for (index = 2; index <= 50; index += 1) {
    for (index1 = 1; index1 <= index; index1 += 1) {
        if (index / index1 === 0) {
            numPrimo += 1

            
        }
    }
    if (numPrimo === 2) {
        console.log(index)
    }
}
