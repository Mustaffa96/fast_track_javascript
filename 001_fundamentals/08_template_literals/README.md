Template literals, also known as template strings, are a feature in JavaScript that allows you to embed expressions within string literals. They are enclosed in backticks (\` \`) instead of single or double quotes, which are traditionally used for creating strings. Template literals offer a more flexible and readable way to construct strings that include variables or expressions.

Here's an example based on w3schools:

```javascript
// Using traditional strings
var name = "Alice";
var greeting = "Hello, " + name + "!";

// Using template literals
var name = "Bob";
var greeting = `Hello, ${name}!`;

console.log(greeting);
```

In this example, we have two ways to create a greeting message. The traditional approach uses concatenation with `+`, while the template literal approach uses backticks (\` \`) to enclose the string and `${}` to embed the variable `name` directly within the string. The result will be the same, with the output being "Hello, Bob!" in both cases.

Template literals can also be multi-line, making them useful for creating more complex strings that span multiple lines.