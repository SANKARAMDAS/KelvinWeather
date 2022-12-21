//kelvin is always constant
const kelvin = 0;
//converting kelvin to celsius and stores the value
const celsius = kelvin - 273;
//converting celsious to Newton Scale
let newton = celsius * (33/100);
//calculating Farenheit to store the value
let fahrenheit = celsius * (9/5) + 32;
//convert from Celsius to Fahrenheit, you often get a decimal number
newton = Math.floor(newton);
//console loging value
console.log(`The temperature is ${newton} degrees Newton.`)