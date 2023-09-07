Data types in JavaScript define the type of values that can be stored and manipulated in a program. JavaScript has several built-in data types, which can be categorized into two main groups: primitive data types and reference data types.

1. Primitive Data Types:
   These data types store single values and are immutable, meaning their values cannot be changed directly. The main primitive data types in JavaScript are:

   a. **String**: Used for representing text. Examples:
      ```javascript
      let name = "John";
      let message = 'Hello, World!';
      ```

   b. **Number**: Used for representing numeric values. Examples:
      ```javascript
      let age = 30;
      let price = 19.99;
      ```

   c. **Boolean**: Used for representing true or false values. Examples:
      ```javascript
      let isStudent = true;
      let isWorking = false;
      ```

   d. **Undefined**: Represents a variable that has been declared but hasn't been assigned a value yet. Example:
      ```javascript
      let address;
      ```

   e. **Null**: Represents the intentional absence of any object value. Example:
      ```javascript
      let emptyValue = null;
      ```

   f. **Symbol**: Introduced in ECMAScript 6 (ES6), Symbols are unique and used for creating object properties that are not easily accessible. Example:
      ```javascript
      const uniqueSymbol = Symbol("description");
      ```

2. Reference Data Types:
   These data types are used to store complex data structures and are mutable, meaning their values can be changed. The main reference data types in JavaScript are:

   a. **Object**: Used for storing collections of key-value pairs. Examples:
      ```javascript
      let person = { name: "Alice", age: 25 };
      let car = { make: "Toyota", model: "Camry" };
      ```

   b. **Array**: An ordered list of values that can be of different data types. Examples:
      ```javascript
      let numbers = [1, 2, 3, 4, 5];
      let fruits = ["apple", "banana", "orange"];
      ```

   c. **Function**: A callable object that can be used to perform a specific task. Examples:
      ```javascript
      function add(a, b) {
          return a + b;
      }

      const sayHello = function() {
          console.log("Hello, World!");
      };
      ```

   d. **Date**: Used for working with dates and times. Example:
      ```javascript
      let today = new Date();
      ```

   e. **RegExp**: Used for working with regular expressions to match patterns in strings. Example:
      ```javascript
      let pattern = /pattern/g;
      ```

These data types allow JavaScript to handle a wide range of data and operations, making it a versatile language for web development and beyond.