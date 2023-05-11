const readline = require('readline-sync');

const weight = readline.question("What’s your weight? ")
const height = readline.question("What’s your height? ")

const imc = weight / (height ** 2);

console.log(`Seu IMC é: ${imc}`);
