function easyHTTP() {
  this.http = new XMLHttpRequest();
}
/* The easyHTTP constructor function initializes an instance of XMLHttpRequest and assigns it to the property http of the easyHTTP object. */


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
	/* The get method is used to make an HTTP GET request. */
	/* It takes two parameters: url (the URL to send the GET request to) and callback (a callback function to handle the response). */
  this.http.open('GET', url, true);
  /* It opens a GET request to the specified URL using this.http.open(). */

  let self = this;
  this.http.onload = function() {
	  /* It sets up an event listener for the load event, which will be triggered when the request is complete. */
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
	  /* calls the provided callback function with null as the error parameter and the response text as the data parameter. */
    } else {
      callback('Error: ' + self.http.status);
	  /* it calls the callback function with an error message containing the HTTP status. */
    }
  }

  this.http.send();
  /* sends the GET request */
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
/* It takes three parameters: url (the URL to send the POST request to), data (the data to send in the request body), and callback (a callback function to handle the response). */
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  /* sets the "Content-type" header to "application/json" using this.http.setRequestHeader() to indicate that the request body contains JSON data. */

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }
/* Inside the event listener, it calls the provided callback function with null as the error parameter and the response text as the data parameter. */

  this.http.send(JSON.stringify(data));
  /* It sends the POST request with the JSON-serialized data */
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
	/* It takes two parameters: url (the URL to send the DELETE request to) and callback (a callback function to handle the response). */
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
	  /* it calls the provided callback function with null as the error parameter and a message indicating that the post was deleted. */
    } else {
      callback('Error: ' + self.http.status);
	  /* it calls the callback function with an error message containing the HTTP status. */
    }
  }

  this.http.send();
  /* sends the DELETE request */
}
