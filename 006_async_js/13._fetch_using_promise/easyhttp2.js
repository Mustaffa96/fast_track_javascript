/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
   
  // Make an HTTP GET Request 
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)	
      .then(res => res.json())
      .then(data => resolve(data)) 
      .catch(err => reject(err));
    });
  } 
  /* This method sends an HTTP GET request to the specified url.
	It returns a Promise that resolves with the parsed JSON response if the request is successful.
	If there's an error during the request, the Promise is rejected with the error. */

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  /* This method sends an HTTP POST request to the specified url with the provided data as the request body.
	It sets the request headers to indicate that the data being sent is in JSON format.
	It returns a Promise that resolves with the parsed JSON response if the request is successful.
	If there's an error during the request, the Promise is rejected with the error. */

   // Make an HTTP PUT Request
   put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  /* This method sends an HTTP PUT request to the specified url with the provided data as the request body.
	Similar to the post method, it also sets the request headers to indicate JSON data.
	It returns a Promise that resolves with the parsed JSON response if the request is successful.
	If there's an error during the request, the Promise is rejected with the error. */

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err));
    });
  }
  /* This method sends an HTTP DELETE request to the specified url.
	It returns a Promise that resolves with the message "Resource Deleted..." if the request is successful.
	If there's an error during the request, the Promise is rejected with the error. */

 }

/* Overall, this EasyHTTP class simplifies the process of making HTTP requests by encapsulating common fetch operations in methods and using Promises to handle asynchronous operations, making it easier to work with HTTP requests in JavaScript applications. */
 