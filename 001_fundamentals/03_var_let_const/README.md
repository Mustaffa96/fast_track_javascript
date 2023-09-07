 In JavaScript, you can use three different keywords to declare variables: `var`, `let`, and `const`. Here's a brief explanation of each:

1. `var`:
   - Variables declared with `var` are function-scoped, which means they are limited to the function in which they are declared.
   - They are also hoisted, meaning they are moved to the top of their containing function or script before execution.
   - `var` variables can be re-declared and updated throughout the code.

2. `let`:
   - Variables declared with `let` are block-scoped, which means they are limited to the block (within curly braces `{}`) in which they are defined.
   - `let` variables are also hoisted but are not initialized until their declaration statement is reached, so trying to access them before the declaration will result in a `ReferenceError`.
   - Unlike `var`, `let` variables can be reassigned but not re-declared within the same scope.

3. `const`:
   - Variables declared with `const` are also block-scoped.
   - `const` stands for "constant," and once a value is assigned to a `const` variable, it cannot be changed or reassigned.
   - Like `let`, `const` variables are hoisted and are not initialized until their declaration statement is reached.

Here's a simple example to illustrate the differences:

```javascript
function exampleScope() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10; // This reassigns the outer 'a'
    let b = 20; // This creates a new 'b' variable in the block scope
    const c = 30; // This creates a new 'c' variable in the block scope
  }

  console.log(a); // Outputs 10
  console.log(b); // Outputs 2 (the outer 'b' is still accessible)
  console.log(c); // Outputs 3 (the outer 'c' is still accessible)
}

exampleScope();
```

In this example, `var` allows redeclaration and updates to the variable in the same scope, while `let` and `const` create new variables with block scope. `const` additionally enforces immutability, making the variable's value constant after assignment.