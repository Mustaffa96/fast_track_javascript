/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/
 
 /* The provided code is a JavaScript class called "EasyHTTP" that encapsulates HTTP request functionality. 
 It allows you to make common HTTP requests such as GET, POST, PUT, and DELETE. 
 This class is designed to simplify making HTTP requests in JavaScript. */

 class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }/* This method is used for making an HTTP GET request to the specified URL. 
  It uses the fetch API to send a GET request and then parses the response as JSON. 
  The method returns the parsed JSON data. */

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
   
  }/* This method is used for making an HTTP POST request to the specified URL with the provided data. 
  It sends a POST request with the Content-type header set to JSON and the data as the request body. 
  It also parses the response as JSON and returns the parsed JSON data. */

   // Make an HTTP PUT Request
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData = await response.json();
    return resData;
  }/* This method is used for making an HTTP PUT request to the specified URL with the provided data. 
  Similar to the post method, it sends a PUT request with the Content-type header set to JSON and the data as the request body. 
  It parses the response as JSON and returns the parsed JSON data. */

  // Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'Resource Deleted...';
    return resData;
  }/* This method is used for making an HTTP DELETE request to the specified URL. It sends a DELETE request with the Content-type header set to JSON. 
  Unlike the other methods, it doesn't parse the response as JSON but simply returns the string "Resource Deleted..." as a confirmation of the deletion. */

 }


/* This class provides a convenient way to perform common HTTP operations in JavaScript by abstracting away some of the low-level details of making HTTP requests. 
It uses the modern async/await syntax for handling asynchronous operations. */
 