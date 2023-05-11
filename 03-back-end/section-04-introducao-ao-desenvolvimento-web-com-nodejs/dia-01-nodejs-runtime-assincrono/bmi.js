const imc = (weight, height) => {
  const bmi = weight / (height ** 2);
  return bmi;
};

console.log(imc(87, 1.80));
