let numeroUM = 5;
let numeroDois = 2;
//exercício 1

console.log(numeroUM + numeroDois);
console.log(numeroUM - numeroDois);
console.log(numeroUM * numeroDois);
console.log(numeroUM / numeroDois);
console.log(numeroUM % numeroDois);

//exercício 2
if (numeroUM > numeroDois) {
    console.log(numeroUM);
} else {
    console.log(numeroDois);
}

//exercício 3
let numeroTres = 8;

if (numeroUM > numeroDois && numeroUM > numeroTres) {
    console.log(numeroUM);
} else if (numeroDois > numeroUM && numeroDois > numeroTres) {
    console.log(numeroDois);
} else {
    console.log(numeroTres);
}

//exercício 4
let number = 5;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//exercício 5
let anguloUm = 60;
let anguloDois = 60;
let anguloTres = 60;
let soma = anguloUm + anguloDois + anguloTres;

if (soma === 180) {
    console.log("true");
} else if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0 && soma !== 180) {
    console.log("false");
} else {
    console.log("error");
}

//exercício 6
let pecaXadrez = "CAVAlo";
let pecaCase = pecaXadrez.toLowerCase()

switch (pecaCase) {
    case "peão":
        console.log("Avança para frente!");
        break;

    case "cavalo":
        console.log("Avança para o lado e para frente");
        break;

    case "bispo":
        console.log("Avança para as diagonais");
        break;
    
    case "torre":
        console.log("Avança para frente e para os lados, quantas vezes quiser");
        break;

    case "rainha":
        console.log("Avança para qualquer lado, quantas vezes quiser");
        break;

    case "rei":
        console.log("Avança para qualquer lado uma vez");
        break;

    default:
        console.log("Peça não encontrada");
}

//exercício 7
let nota = 100;
let limiteNota = nota <= 100;

if (nota >= 90 && limiteNota) {
    console.log("A");
} else if ( nota >= 80 && limiteNota) {
    console.log("B");
} else if ( nota >= 70 && limiteNota) {
    console.log("C");
} else if ( nota >= 60 && limiteNota) {
    console.log("D");
} else if ( nota >= 50 && limiteNota) {
    console.log("E");
} else if ( nota < 50 && nota > 0) {
    console.log("F");
} else if (nota < 0 || nota > 100)
    console.log("Nota inválida");

//exercício 8
const numberOnep = 6;
const numberTwop = 4;
const numberThreep = 2;

if (numberOnep % 2 === 0 || numberTwop % 2 === 0 || numberThreep % 2 === 0) {
    console.log("true");
} else {
    console.log("false");
}

//exercício 9
const numberOnei = 6;
const numberTwoi = 4;
const numberThreei = 3;

if (numberOnei % 2 >= 1 || numberTwoi % 2 >= 1 || numberThreei % 2 >= 1) {
    console.log("true");
} else {
    console.log("false");
}

//exercício 10
const custo = 1000;
const venda = 2000;
let imposto = (20/100) * custo;
let custoTotal = imposto + custo;
let lucro = venda - custoTotal;

if (custo < 0 && venda < 0) {
    console.log("Valor inválido, caso encerrado!");
} else {
    console.log(lucro);
}

//exercício 11
const salario = 1200;
let requisitoUm = (8/100) * salario;

if (salario <= 1556.94 && salario < 1903.98) {
    console.log(salario - requisitoUm);
} else if (salario >= 1556.95 && ) {
    console.log("B");
} else if ( nota >= 70 && limiteNota) {
    console.log("C");
} else if ( nota >= 60 && limiteNota) {
    console.log("D");
} else if ( nota >= 50 && limiteNota) {
    console.log("E");
} else if ( nota < 50 && nota > 0) {
    console.log("F");
} else if (nota < 0 || nota > 100)
    console.log("Nota inválida");