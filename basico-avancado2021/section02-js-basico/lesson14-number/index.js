let num1 = 1500; // number
let num2 = 2.5; // number
let num3 = 10.578955125547; // number

//console.log(num1.toString() + num2);
//num1 = num1.toString();
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

// IEEE 754-2008
num4 = 0.7; // number
num5 = 0.1; // number

num4 += num5; // num1 = num1 + num2
num4 += num5; // num1 = num1 + num2
num4 += num5; // num1 = num1 + num2 --> 0.9999999999999999

//num4 = num4.toFixed(2);

num4 = parseFloat(num4.toFixed(2)); // outra maneira abaixo.
num4 = ((num1 * 100) + (num2 * 100)) / 100; 



console.log(num4);
console.log(Number.isInteger(num4));