// var, let, const

// Please uncomment(remove double slash) each one of the variable if you want to display the output


//VAR
/*var name = "Mustaffa";
console.log(name);
name = "John Doe";
console.log(name);

// Init var
var greeting; // we not state the value of greeting, so the output will be undefined
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Cannot start with number
//var 1name = 'John'; //will give error
var $name = 'John'; //not recommended unless it involving JQuery or DOM
console.log($name);

var _name = 'John'; //recommended for advanced javascript
console.log(_name);

//Multi word vars
var firstName = 'John'; // Camel 
console.log(firstName);

var first_name = 'Sara'; // Underscore - usually used in 
console.log(first_name);

var FirstName = 'Tom'; // Passcode case
console.log(FirstName);

var firstname;*/

//*******************************************************************************************//

//LET
/*let name = "Mustaffa";
console.log(name);
name = "John Doe";
console.log(name);

// Init let
let greeting; // we not state the value of greeting, so the output will be undefined
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Cannot start with number
//let 1name = 'John'; //will give error
let $name = 'John'; //not recommended unless it involving JQuery or DOM
console.log($name);

let _name = 'John'; //recommended for advanced javascript
console.log(_name);

//Multi word lets
let firstName = 'John'; // Camel 
console.log(firstName);

let first_name = 'Sara'; // Underscore - usually used in 
console.log(first_name);

let FirstName = 'Tom'; // Passcode case
console.log(FirstName);

let firstname;*/

//*******************************************************************************************//

//CONST
const name = "Mustaffa";
console.log(name);
// Cannot reassign
//name = 'John Doe';
// Have to reassign value
//const greeting; // need to put a value

const person = {
  name: "John",
  age: 34,
};

console.log(person);

person.name = "Sara";
person.age = 32;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

//const is purposed that value should not be assigned, and made code more robust and secure
