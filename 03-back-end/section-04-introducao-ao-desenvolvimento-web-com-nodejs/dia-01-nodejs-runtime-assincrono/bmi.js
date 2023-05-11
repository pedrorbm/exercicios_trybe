const readline = require('readline-sync');

const bmi = (weight, height) => {
  const heightResult = height / 100;
  const bmi = weight / (heightResult ** 2);
  return bmi;
};

const weightUser = readline.questionInt("What’s your weight? (kg) ")
const heightUser = readline.questionInt("What’s your height? (cm) ")


console.log(`Your BMI is: ${bmi(weightUser, heightUser)}`);
