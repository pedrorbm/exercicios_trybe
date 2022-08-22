let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1
for (let numbersAll of numbers) {
  console.log(numbersAll);
}

//exercício 2
let contador = 0;
for (let index = 0; index < numbers.length; index += 1) {
  contador += numbers[index];
}

console.log(contador);

//exercicio 3
let adicao = 0;

for (index = 0; index < numbers.length; index += 1) {
  adicao += numbers[index];
}

let mediaAritmetica = (adicao / numbers.length);
console.log(mediaAritmetica);

//exercício 4
if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//exercicio 5
let numeroMaior = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > numeroMaior) {
    numeroMaior = numbers[index];
  }
}

console.log(numeroMaior);

//exercicio 6
let impar = 0

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(impar);
}

//exercício 7
let menorNumero = (numbers.length - 1);

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
   
console.log(menorNumero);

//exercício 8
let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

console.log(numeros);

//exercício 9
for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2)
}



