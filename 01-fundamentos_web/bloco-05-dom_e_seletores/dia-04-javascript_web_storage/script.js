const inputColorBackground = document.getElementById("inputColorBackground");
const inputColorFont = document.getElementById("inputColorFont");
const paraOne = document.getElementById("paraOne");
const paraTwo = document.getElementById("paraTwo");
const paraThree = document.getElementById("paraThree");

paraOne.addEventListener("click", pOneChangeColorBackground);
paraTwo.addEventListener("click", pTwoChangeColorBackground);
paraThree.addEventListener("click", pThreeChangeColorBackground);

let valueBackgroundParaOne = null;
let valueBackgroundParaTwo = null;
let valueBackgroundParaThree = null;

pOneChangeColorBackground();
pTwoChangeColorBackground();
pThreeChangeColorBackground();

function pOneChangeColorBackground() {
    valueBackgroundParaOne = inputColorBackground.value;
    paraOne.style.backgroundColor = valueBackgroundParaOne;
};

function pTwoChangeColorBackground() {
    valueBackgroundParaTwo = inputColorBackground.value;
    paraTwo.style.backgroundColor = valueBackgroundParaTwo;
};

function pThreeChangeColorBackground() {
    valueBackgroundParaThree = inputColorBackground.value;
    paraThree.style.backgroundColor = valueBackgroundParaThree;
};

//parte 2
paraOne.addEventListener("click", pOneChangeColorFont);
paraTwo.addEventListener("click", pTwoChangeColorFont);
paraThree.addEventListener("click", pThreeChangeColorFont);

let valueFontParaOne = null;
let valueFontParaTwo = null;
let valueFontParaThree = null;

pOneChangeColorFont();
pTwoChangeColorFont();
pThreeChangeColorFont();

function pOneChangeColorFont() {
    valueFontParaOne = inputColorFont.value;
    paraOne.style.color = valueFontParaOne;
};

function pTwoChangeColorFont() {
    valueFontParaTwo = inputColorFont.value;
    paraTwo.style.color = valueFontParaTwo;
};

function pThreeChangeColorFont() {
    valueFontParaThree = inputColorFont.value;
    paraThree.style.color = valueFontParaThree;
};