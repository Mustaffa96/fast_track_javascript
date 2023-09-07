Array methods in JavaScript are built-in functions that allow you to perform various operations on arrays, such as adding, removing, or modifying elements, searching for elements, and more. Here, I'll provide explanations and examples of some common array methods based on the examples from the W3Schools website.

1. **push()**:
   - Adds one or more elements to the end of an array.
   - Example:
     ```javascript
     var fruits = ["Banana", "Orange", "Apple"];
     fruits.push("Mango");
     // fruits is now ["Banana", "Orange", "Apple", "Mango"]
     ```

2. **pop()**:
   - Removes the last element from an array and returns it.
   - Example:
     ```javascript
     var fruits = ["Banana", "Orange", "Apple"];
     var removedFruit = fruits.pop();
     // removedFruit is "Apple", fruits is now ["Banana", "Orange"]
     ```

3. **shift()**:
   - Removes the first element from an array and returns it.
   - Example:
     ```javascript
     var fruits = ["Banana", "Orange", "Apple"];
     var removedFruit = fruits.shift();
     // removedFruit is "Banana", fruits is now ["Orange", "Apple"]
     ```

4. **unshift()**:
   - Adds one or more elements to the beginning of an array.
   - Example:
     ```javascript
     var fruits = ["Banana", "Orange", "Apple"];
     fruits.unshift("Mango");
     // fruits is now ["Mango", "Banana", "Orange", "Apple"]
     ```

5. **concat()**:
   - Combines two or more arrays and returns a new array.
   - Example:
     ```javascript
     var fruits1 = ["Banana", "Orange"];
     var fruits2 = ["Apple", "Mango"];
     var combinedFruits = fruits1.concat(fruits2);
     // combinedFruits is ["Banana", "Orange", "Apple", "Mango"]
     ```

6. **slice()**:
   - Returns a portion of an array as a new array.
   - Example:
     ```javascript
     var fruits = ["Banana", "Orange", "Apple", "Mango"];
     var citrus = fruits.slice(1, 3);
     // citrus is ["Orange", "Apple"]
     ```

These are just a few of the array methods available in JavaScript. They make it easier to manipulate and work with arrays, allowing you to perform a wide range of operations efficiently.