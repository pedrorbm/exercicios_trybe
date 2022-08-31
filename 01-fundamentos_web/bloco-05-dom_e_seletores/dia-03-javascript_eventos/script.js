function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ul = document.getElementById("days");

function createLi() {
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const elementLi = document.createElement("li");
        elementLi.className = "day";
        ul.appendChild(elementLi);
        const adicionaTexto = document.getElementsByClassName("day")[index];
        adicionaTexto.innerHTML = decemberDaysList[index];
    };
};

createLi();

function addClass() {
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const searchClass = document.getElementsByClassName("day")[index];
        if (searchClass.innerHTML === "24" || searchClass.innerHTML === "25" || searchClass.innerHTML === "31") {
            searchClass.classList.add("holiday");
        };
        if (searchClass.innerHTML === "4" || searchClass.innerHTML === "11" || searchClass.innerHTML === "18" || searchClass.innerHTML === "25") {
            searchClass.classList.add("friday");
        };
    };
};

addClass();

//exercício 2
const divButton = document.querySelector(".buttons-container");

function holidays(feriados) {
    const createButton = document.createElement("button");
    createButton.id = "btn-holiday";
    createButton.innerText = feriados;
    divButton.appendChild(createButton);
};

holidays("feriados");

//exercício 3
const button = document.querySelector("#btn-holiday");
const classHoliday = document.getElementsByClassName("holiday");
let contador = 0

function effectColor(param) {
    for (let index = 0; index < classHoliday.length; index += 1) {
        if (contador === 0) {
            classHoliday[index].style = "background-color: red"
        };
    }; 
    contador += 1
    console.log(contador)
};

if (contador === 0) 
    button.addEventListener("click", effectColor); {

}

function noEffectColor(param) {
    for (let index = 0; index < classHoliday.length; index += 1) {
        if (contador === 1) {
            classHoliday[index].style = "background-color: black"
        };
    }; 
    contador -= 1
    console.log(contador)
};




button.addEventListener("click", effectColor);
button.addEventListener("click", noEffectColor);


