const num1 = 100;
const num2 = 60;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; // pi = 3.141592653589793
val = Math.E; // e = 2.718281828459045
val = Math.round(2.8); // 3 = round off to highest number
val = Math.ceil(2.4); // 3 = round off into integer number
val = Math.floor(2.8); // 2
val = Math.sqrt(4); // square root
val = Math.abs(-3); // absolute number
val = Math.pow(8, 2); // power
val = Math.min(2, 33, 4, 1, 55, 6, 3); // select the most minimum number
val = Math.max(2, 33, 4, 1, 55, 6, 3);
val = Math.random(); // give random number

val = Math.random() * 20; //generate random number from 1-19
val = Math.floor(Math.random() * 20 + 1); //generate random number from 1-20 but give the integer number only

console.log(val);
