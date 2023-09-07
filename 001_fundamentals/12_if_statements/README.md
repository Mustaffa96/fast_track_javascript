An `if-else` statement is a fundamental control structure in programming that allows you to make decisions and execute different blocks of code based on a condition. The condition is evaluated, and if it is true, a specific block of code is executed; if the condition is false, another block of code is executed. This helps you create branching logic in your programs.

Here's the basic syntax of an `if-else` statement in JavaScript:

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

Let's break down the components of this structure:

1. `if`: This is the keyword that starts the conditional statement.
2. `condition`: An expression or condition that is evaluated as either `true` or `false`.
3. The code block within the first set of curly braces `{}` is executed if the condition is `true`.
4. `else`: This is an optional keyword that can be used to specify an alternative block of code to execute when the condition is `false`.
5. The code block within the second set of curly braces `{}` (after the `else` keyword) is executed if the condition is `false`.

Here's an example from the w3schools website that demonstrates the usage of an `if-else` statement in JavaScript:

```javascript
var time = new Date().getHours();
var greeting;

if (time < 12) {
  greeting = "Good morning";
} else {
  greeting = "Good afternoon";
}

console.log(greeting);
```

In this example, a `Date` object is used to get the current hour of the day, and it is stored in the `time` variable. Then, an `if-else` statement is used to determine whether it's morning (before 12) or afternoon (12 or later). If the condition `time < 12` is true, the `greeting` variable is set to "Good morning," and if it's false, it's set to "Good afternoon." Finally, the chosen greeting is logged to the console.

So, when you run this code, the output will be either "Good morning" or "Good afternoon" based on the current time of day. This demonstrates how the `if-else` statement allows you to make decisions and execute different code blocks based on conditions.