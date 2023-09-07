/* This is a partial implementation of an HTTP client library in JavaScript using the XMLHttpRequest object. 
It defines a constructor function called easyHTTP that is meant to make it easier to perform HTTP requests. 
The code includes the get method, which is used to make HTTP GET requests, but the POST, PUT, and DELETE methods are placeholders and haven't been implemented yet. */

function easyHTTP() {
  this.http = new XMLHttpRequest();
}
/* his is a constructor function for the easyHTTP object. 
When you create a new instance of easyHTTP using new easyHTTP(), it initializes an instance with an XMLHttpRequest object stored in its http property. */


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
/* This is a method defined on the prototype of the easyHTTP object. It is used to make an HTTP GET request to the specified URL.

* url: The URL to which the GET request will be made.
* callback: A callback function that will be called when the request is complete. It should take two arguments: an error (if any) and the response data. */
  this.http.open('GET', url, true);
  /* This line opens an asynchronous GET request to the specified URL. 
  The third argument, true, indicates that the request should be asynchronous. */

  let self = this;
  /* This line creates a reference to the current instance (this) and assigns it to the variable self. 
  This is done to capture the this context because the onload function callback will have a different context. */
  
  this.http.onload = function() {
/* This is an event handler that is triggered when the HTTP request is complete (i.e., when the response is received). 
Inside this event handler: */

    if(self.http.status === 200) {
/* It checks if the HTTP status code of the response is 200, which indicates a successful request. */
      callback(null, self.http.responseText);
/* If the status is 200, it calls the callback function with null as the first argument (indicating no error) and self.http.responseText as the second argument (the response data). */
    } else {
      callback('Error: ' + self.http.status);
/* If the status is not 200, it calls the callback function with an error message containing the HTTP status code. */
    }
  }

  this.http.send();
  /* This line sends the GET request to the specified URL. */
}

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request

