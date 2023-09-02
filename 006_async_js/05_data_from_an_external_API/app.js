/* This JavaScript code handles an event listener for a button with the class "get-jokes" and defines a function called "getJokes" that is executed when the button is clicked. 
The purpose of this code is to make an asynchronous HTTP request to a joke API, retrieve a specified number of random jokes, and display them on a web page. */

document.querySelector('.get-jokes').addEventListener('click', getJokes);
/* This line adds an event listener to an HTML element with the class "get-jokes," which is typically a button. When this element is clicked, the getJokes function will be executed. */

function getJokes(e) {
	/* This is the definition of the getJokes function, which takes an event object e as its parameter. 
	It will be called when the "get-jokes" button is clicked. */
	
  const number = document.querySelector('input[type="number"]').value;
  /* This line retrieves the value entered into an HTML input field of type "number." 
  Presumably, there is an input field somewhere in the HTML where the user can specify how many jokes they want to retrieve. */

  const xhr = new XMLHttpRequest();
  /* This object allows you to make HTTP requests to a server. */

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  /* This line configures the XMLHttpRequest object to make a GET request to the specified API endpoint. 
  The ${number} part of the URL is replaced with the value entered in the input field, allowing the user to specify how many random jokes they want to retrieve. 
  The true parameter indicates that the request should be asynchronous. */

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
	  /* This code defines a function to be executed when the HTTP request completes successfully. Inside this function:

* It checks if the status code of the response is 200, which indicates a successful request.
* If the request was successful, it parses the JSON response and processes it to extract jokes.
* It constructs an HTML string containing the jokes as list items and stores it in the output variable.
* If the response type is "success," it iterates through the joke objects in the response and appends each joke to the output variable.
* If there is an error or the response type is not "success," it appends a "Something went wrong" message to the output variable. */
	  

      document.querySelector('.jokes').innerHTML = output;
	  /* Finally, this line updates the content of an HTML element with the class "jokes" with the output variable, which contains the formatted jokes or an error message. */
    }
  }

  xhr.send();
  /* This line sends the GET request to the API. */

  e.preventDefault();
  /* This prevents the default behavior of the button click event, which would normally trigger a page reload. 
  Instead, it allows the asynchronous request to be made without refreshing the entire page. */
}


/* In summary, this code listens for a button click, sends an asynchronous GET request to a joke API, processes the response, and displays the jokes or an error message on the web page without a page reload. 
It's a simple example of using XMLHttpRequest to fetch data from an external API and update the DOM based on the response. */