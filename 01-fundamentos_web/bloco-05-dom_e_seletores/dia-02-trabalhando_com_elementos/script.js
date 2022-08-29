//exercício 1
let body = document.querySelector("body");

let adicionaH1 = document.createElement("h1");

adicionaH1.innerText = "Exercício 5.2 - Javascript DOM";

let adiciona = body.appendChild(adicionaH1);

//exercício 2
let adicionaMain = document.createElement("main");

adicionaMain.className = "main-content";

body.appendChild(adicionaMain);

//exercício 3
let adicionaSection = document.createElement("section");

adicionaSection.className = "center-content";

let main = body.querySelector("main");

main.appendChild(adicionaSection);

//exercício 4
let adicionaP = document.createElement("p");

let section = main.querySelector("section");

adicionaP.innerText = "teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste";

section.appendChild(adicionaP);

//exercício 5
let section2 = document.createElement("section");

section2.className = "left-content";

main.appendChild(section2);

//exercício 6
let section3 = document.createElement("section");

section3.className = "right-content";

main.appendChild(section3);

//exercício 7
let img = document.createElement("img");

img.src = "https://picsum.photos/200";

img.className = "small-image";

section2.appendChild(img);

//exercício 8
let listaNaoOrdenada = document.createElement("ul");

section3.appendChild(listaNaoOrdenada);

let ul = section3.querySelectorAll("ul")[0];

let arrayNum = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < arrayNum.length; index += 1) {
    let lista = document.createElement("li");
    ul.appendChild(lista);
    let adicionaLi = body.getElementsByTagName("li")[index];
    adicionaLi.innerText = arrayNum[index]; 
};

//exercício 9
for (let index = 0; index < 3; index += 1) {
    let adicionaH3 = document.createElement("h3");
    main.appendChild(adicionaH3);
};

//parte 2

//exercício 1
let h1 = document.querySelector("h1");

h1.className = "title";

//exercício 2
let h3 = document.getElementsByTagName("h3");

for (let index = 0; index < h3.length; index += 1) {
    h3[index].className = "description";
};

//exercício 3
main.removeChild(section2);

//exercicio 4
section3.style = "margin-right: auto";

//exercício 5
main.style = "background-color: purple";

//exercício 6
let contadorLi = document.getElementsByTagName("li");

for (let index = contadorLi.length - 1; index > 7; index -= 1) {
    ul.removeChild(contadorLi[index]);
};