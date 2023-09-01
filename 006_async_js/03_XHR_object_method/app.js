/* This code is an example of using JavaScript to make an asynchronous HTTP request (AJAX) to load data from a server when a button with the id "button" is clicked. 
Let's break down the code step by step: */

document.getElementById('button').addEventListener('click', loadData);
/* This line adds an event listener to an HTML element with the id "button." 
When this element is clicked, it calls the loadData function. */


function loadData() { /* This is the loadData function, which is called when the button is clicked. */
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
	/* Here, an XMLHttpRequest object named xhr is created. This object is used to make HTTP requests to a server. */
	
  // OPEN
  xhr.open('GET', 'data.txt', true);
	/* This line configures the XMLHttpRequest object for a GET request to a file named "data.txt" on the server. 
	The true parameter indicates that the request should be asynchronous. */
	
  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  } 
  /* This code sets up an event handler for the "onprogress" event. This event is triggered while the request is in progress. 
  In this case, it logs the readyState of the request to the console. */

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  } 
	/* An event handler is set for the "onload" event, which is triggered when the request is successfully completed. Inside this handler:
* It logs the readyState of the request to the console.
* It checks if the HTTP status code is 200, indicating a successful response.
* If the status is 200, it updates the content of an HTML element with the id "output" to display the response text as an <h1> element. */

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }
  /* This event handler is set for the "onerror" event, which is triggered if there is an error during the request. In this case, it logs "Request error..." to the console. */

  xhr.send();
  /* Finally, the send method is called to initiate the XMLHttpRequest and send the GET request to the server to fetch the "data.txt" file. */


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

/* The comments in the code provide explanations of what each section does and what each readyState value and HTTP status code means. 
The code demonstrates a basic AJAX request setup for loading data from a server and updating the DOM with the response. */