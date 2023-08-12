// FUNCTION DECLARATIONS

// *********** Basic Hello ************

// function greet(){
//     // console.log('Hello');
//     return 'Hello';
// }

// console.log(greet());

// *********** Hello John version 1 ************

// function greet(firstName){
//     // console.log('Hello');
//     return 'Hello ' + firstName;
// }

// console.log(greet('John'));

// *********** Hello John version 1 ************

// function greet(firstName, lastName) {
//   // console.log('Hello');
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet("John", 'Doe'));

// ***********version************

// function greet(firstName, lastName) {
//   if (typeof firstName === "undefined") {
//     firstName = "John";
//   }
//   if (typeof lastName === "undefined") {
//     lastName = "Doe";
//   }
//   // console.log('Hello');
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet());

// function greet(firstName, lastName) {
//   if (typeof firstName === "undefined") {
//     firstName = "John";
//   }
//   if (typeof lastName === "undefined") {
//     lastName = "Doe";
//   }
//   //console.log('Hello');
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet("Steve", "Smith"));

function greet(firstName, lastName) {
  // if (typeof firstName === "undefined") {
  //   firstName = "John";
  // }
  // if (typeof lastName === "undefined") {
  //   lastName = "Doe";
  // }
  //console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function () {
//   console.log("IIFE Ran...");
// })();

// (function (name) {
//   console.log("Hello " + name);
// })("Mustaffa");

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
