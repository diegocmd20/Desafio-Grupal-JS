let number1 = prompt("Ingresa el primer número");
let number2 = prompt("Ingresa el segundo número");
console.log(`El resultado de la suma es ${parseInt(num1)+parseInt(num2)}. El resultado de la resta es ${parseInt(num1)-parseInt(num2)}. El resultado de la multiplicación ${parseInt(num1)*parseInt(num2)}. El resultado de la división es ${parseInt(num1)/parseInt(num2)}.`);

let temp = parseFloat(prompt("Ingresa los grados Celsius"));
let kelvin = temp + 273.15; 
let fahrenheit = ((temp * (9/5)) + 32); 
console.log(`Los grados Celsius ingresados en Kelvin son ${kelvin} y en Fahrenheit ${fahrenheit}`);

let totalDays = parseFloat(prompt("Ingresa la cantidad de días:"));
let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;
let weeks = Math.floor(remainingDays / 7);
let days = Math.floor(remainingDays % 7);

console.log(`${totalDays} días equivalen a:`);
console.log(`${years} año(s), ${weeks} semana(s) y ${days} día(s)`);

let num1 = parseFloat(prompt("Ingresa el número 1"));
let num2 = parseFloat(prompt("Ingresa el número 2"));
let num3 = parseFloat(prompt("Ingresa el número 3"));
let num4 = parseFloat(prompt("Ingresa el número 4"));
let num5 = parseFloat(prompt("Ingresa el número 5"));
let sum = num1 + num2 + num3 + num4 + num5;
let prom = sum / 5;
console.log(`La suma de los números es: ${sum}. El promedio de los números es: ${prom}`);
