/* The code provided is JavaScript code that demonstrates the use of asynchronous operations and the async/await syntax for handling promises. */


// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}
/* It uses the await keyword to pause the execution of the code until the fetch function retrieves data from the specified URL ('https://jsonplaceholder.typicode.com/users').
	The await keyword is used again to pause until the HTTP response is resolved.
	Once the response is resolved, the response.json() method is called to parse the JSON data from the response.
	The parsed JSON data is stored in the data variable.
	Finally, the data is returned from the function. */

getUsers().then(users => console.log(users));
/* a .then() method is used to handle the resolved value (the JSON data) once the getUsers function completes its execution. 
In this case, it simply logs the users data to the console. */