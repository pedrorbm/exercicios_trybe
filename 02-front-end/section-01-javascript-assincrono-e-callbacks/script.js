//exercício 1
/* const getPlanet = () => {
    setTimeout(() => {
        const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: 'kilometers',
            },
        };
        console.log('Returned planet: ', mars);
    }, 4000);
  };
  
  getPlanet(); // Imprime Marte depois de 4 segundos */

//exercício 2
/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    setTimeout(() => {
        const temp = callback();
        console.log(`A temperatura de Marte é: ${temp} graus celsius`);
    }, messageDelay());
}

sendMarsTemperature(getMarsTemperature); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo */

//exercício 3
/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = () =>
  console.log(`Atualmente está ${toFahrenheit(5)}ºF em Marte`);

const greet = () =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${2}ºC em Marte`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
    setTimeout(() => {
        const temp = callback();
    }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo */

//exercício 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, error) => {
    setTimeout(() => {
        if (typeof callback === 'function') {
            callback(5)
        } else {
            error()
        }
    }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);