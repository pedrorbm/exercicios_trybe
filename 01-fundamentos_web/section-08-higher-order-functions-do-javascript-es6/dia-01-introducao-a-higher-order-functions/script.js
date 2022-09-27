//exercício 1
const personEmail = (name) => {
    const object = { nomeCompleto: [], email: [] }
    const email = `${name.replace(' ', '_').toLowerCase()}@trybe.com`
    object.email.push(email)
    object.nomeCompleto.push(name)

    return object;
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(personEmail))

//exercício 2

const numberVerification = (numberSort, numberChosen) => {
    if (numberSort === numberChosen) {
        return 'Parabéns você ganhou'
    }

    return 'Tente novamente'
}

const hofSort = (number, callback) => {
    let numberRandom = Math.random(5) * 5
    let numberSort = Math.ceil(numberRandom)
    return callback(numberSort, number)
}

console.log(hofSort(3, numberVerification))

//exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (comparation) => {
    let note = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
            note += 1;
        } else if (STUDENT_ANSWERS[index] === 'N.A') {
            note += 0;
        } else if (RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index]) {
            note -= 0.5;
        }
    };

    return note;
};

const hofExam = (solutions, answers, comparation) => {
    return comparation()
}

console.log(hofExam(RIGHT_ANSWERS, STUDENT_ANSWERS, result))
