I'm unable to access external websites, but I can certainly explain the concept of `async/await` in JavaScript to you.

`async/await` is a feature in JavaScript that allows you to work with asynchronous code in a more readable and synchronous-like manner. It's often used with functions that return promises, such as those involving network requests or file I/O.

Here's a brief overview of how it works:

1. `async` Function Declaration:
   - You declare a function as `async` by adding the `async` keyword before the `function` keyword. For example: `async function myFunction() { }`

2. `await` Keyword:
   - Inside an `async` function, you can use the `await` keyword before an expression that returns a Promise. This keyword tells JavaScript to pause the execution of the function until the Promise is resolved, and then it continues.

Here's a simple example:

```javascript
async function fetchData() {
  // This is an asynchronous operation that returns a Promise
  const response = await fetch('https://example.com/data');
  
  // Once the Promise is resolved, we can work with the data
  const data = await response.json();
  
  console.log(data);
}

fetchData();
```

In the above code:
- `fetch` is an asynchronous operation that returns a Promise when it makes a network request.
- We use `await` to pause execution until the `fetch` Promise is resolved.
- After that, we use `await` again to pause execution until the response is converted to JSON.
- Finally, we log the `data`.

Using `async/await` makes asynchronous code look more like traditional synchronous code, which can improve readability and maintainability.

Keep in mind that `async/await` should be used within `async` functions, and it's essential to handle errors using try-catch blocks or `.catch()` with Promises to ensure your code handles exceptions gracefully.