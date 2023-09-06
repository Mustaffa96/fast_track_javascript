/* This JavaScript code is responsible for adding event listeners to three different buttons with IDs 'button1', 'button2', and 'button3'. 
When each button is clicked, a corresponding function is executed to fetch and display data from different sources. */

document.getElementById('button1').addEventListener('click', getText);
/* This line adds a click event listener to the HTML element with the ID 'button1'. 
When 'button1' is clicked, it will trigger the getText function. */

document.getElementById('button2').addEventListener('click', getJson);
/* This line adds a click event listener to the HTML element with the ID 'button2'. 
When 'button2' is clicked, it will trigger the getJson function. */

document.getElementById('button3').addEventListener('click', getExternal);
/* This line adds a click event listener to the HTML element with the ID 'button3'. 
When 'button3' is clicked, it will trigger the getExternal function. */

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}
/* his function is responsible for fetching and displaying data from a local text file named 'test.txt'. 
It uses the Fetch API to make an HTTP request to 'test.txt', retrieves the text content, and displays it in an HTML element with the ID 'output'. */


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}
/* This function fetches and displays data from a local JSON file named 'posts.json'. 
It uses the Fetch API to request 'posts.json', parses the JSON response, extracts the titles from the JSON objects, and displays them as list items in an HTML element with the ID 'output'. */


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}
/* This function fetches data from an external API (GitHub's API in this case) by making an HTTP request to 'https://api.github.com/users'. 
It then parses the JSON response, extracts usernames, and displays them as list items in an HTML element with the ID 'output'. */

/* Each of these functions follows a similar structure using fetch to perform HTTP requests and a series of .then and .catch handlers to handle the response and any potential errors. 
The retrieved data is ultimately displayed in the 'output' HTML element. */