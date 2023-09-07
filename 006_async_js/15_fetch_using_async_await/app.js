const http = new EasyHTTP;
/* This line creates an instance of the EasyHTTP class and assigns it to the variable http. 
This instance is likely used to make HTTP requests using the methods provided by the EasyHTTP class. */

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}
/* This defines an object data containing user-related information such as name, username, and email. 
This data will be used in HTTP POST and PUT requests. */

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
/* This code sends an HTTP POST request to the URL 'https://jsonplaceholder.typicode.com/users' with the data object as the request payload. 
The then method is used to handle a successful response, and the catch method is used to handle any errors. */

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
/* This code sends an HTTP PUT request to update a user with ID 2 at the URL 'https://jsonplaceholder.typicode.com/users/2'. 
It sends the data object as the updated user information. 
Similarly, it handles the response or errors using the then and catch methods. */

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
/* This code sends an HTTP DELETE request to delete a user with ID 2 at the URL 'https://jsonplaceholder.typicode.com/users/2'. 
It does not send any payload (request body) since DELETE requests typically do not require a body. 
The then and catch methods handle the response or errors, respectively. */

/* The commented-out code sections indicate that these requests (GET and POST) were likely tested or used before but are currently disabled. 
The active part of the code is the HTTP DELETE request, which deletes a user and logs the response or error to the console. */