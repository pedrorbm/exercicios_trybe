const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    max: 18.5
  },
  'Normal weight': {
    min: 18.5,
    max: 24.9,
  },
  'Overweight': {
    min: 25.0,
    max: 29.9,
  },
  'Grade I obesity': {
    min: 30.0,
    max: 34.9,
  },
  'Grade II obesity': {
    min: 35.0, 
    max: 39.9,
  },
  'Grades III and IV': {
    min: 40.0,
  },
};

const bmi = (weight, height) => {
  const heightResult = height / 100;
  const bmi = weight / (heightResult ** 2);
  return bmi;
};

const result = (bmi) => {
  const keysTableBmi = Object.keys(BMI_MAX_AND_MIN);

  const findTableBmi = keysTableBmi.find((level) => {
    const {min, max} = BMI_MAX_AND_MIN[level];
    const bmiMin = min ? bmi > min : false;
    const bmiMax = max ? bmi < max : false;
    console.log(bmiMax)

    return bmiMin && bmiMax; 
  })

  return findTableBmi;
};

const main = () => {
  const weightUser = readline.questionFloat("What’s your weight? (kg) ")
  const heightUser = readline.questionInt("What’s your height? (cm) ")

  const resultBmi = bmi(weightUser, heightUser);
  const tableBmi = result(resultBmi);

  console.log(`Your BMI is: ${bmi(weightUser, heightUser)}`);
  console.log(`Situation: ${tableBmi}`)
};

main();
