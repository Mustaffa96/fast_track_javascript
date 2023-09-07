Block scope is a concept in programming that defines the scope or visibility of variables and functions within a specific block of code. In JavaScript, a block is typically defined by a pair of curly braces `{}`. Variables and functions declared within a block are only accessible or "scoped" within that block and its nested blocks, but not outside of it.

Here's an example of block scope in JavaScript based on the information from W3School:

```javascript
// Global scope
var x = 10;

if (true) {
  // Block scope
  var y = 20; // This variable is accessible inside and outside the if block
  let z = 30; // This variable is also accessible only within the if block
  
  console.log(x); // Output: 10
  console.log(y); // Output: 20
  console.log(z); // Output: 30
}

console.log(x); // Output: 10
console.log(y); // Output: 20 (y is accessible outside the if block)
console.log(z); // ReferenceError: z is not defined (z is not accessible outside the if block)
```

In this example:

1. `x` is declared in the global scope and is accessible throughout the entire script.
2. `y` is declared with the `var` keyword within the `if` block, which creates a variable with function-level scope. This means it is accessible both inside and outside of the `if` block.
3. `z` is declared with the `let` keyword within the `if` block, which creates a variable with block-level scope. This means it is only accessible within the `if` block and not outside of it.

As demonstrated in the example, variables declared with `var` are function-scoped, and variables declared with `let` are block-scoped. Block scope is generally considered more predictable and safer for variable declarations as it prevents unintended variable access outside of the intended block. This is particularly important when dealing with loops, conditional statements, or any other code blocks where you want to limit variable scope to a specific portion of your code.