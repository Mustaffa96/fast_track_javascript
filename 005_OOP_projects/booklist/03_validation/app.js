// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
/* It defines a Book constructor function that is used to create book objects. 
The constructor takes three parameters: title, author, and isbn. When you create a Book object using this constructor, it initializes the object with these properties. */

// UI Constructor
function UI() {}
/* This defines an UI constructor function, which doesn't take any parameters. It's used to define methods related to the user interface of the web application. */


// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}
/* This method is added to the UI prototype. It takes a book object as a parameter. Inside the method:

*It gets a reference to an HTML element with the ID 'book-list', typically a <table> where the book information will be displayed.
*It creates a new table row (<tr>) element.
*It sets the inner HTML of the row to display the book's title, author, ISBN, and a delete button.
*Finally, it appends this row to the book list, effectively adding the book to the list in the user interface. */

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}
/* This method is also added to the UI prototype. It takes two parameters: message and className. Inside the method:

*It creates a new <div> element.
*It sets the className of the div to include the provided className. This is used for styling purposes, like applying different styles for success and error messages.
*It appends a text node with the message to the div.
*It finds the container element with the class 'container' and the form element with the ID 'book-form'.
*It inserts the div just before the form element within the container.
*After a timeout of 3 seconds, it removes the alert div from the DOM. */

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
/* This method is used to clear the input fields (title, author, and ISBN) in the form. It sets the values of these input fields to empty strings, effectively clearing them. */

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
/* This code adds an event listener to the form with the ID 'book-form' for the 'submit' event. When the form is submitted (i.e., when the user clicks a submit button), the following steps are performed:

*It retrieves the values of the title, author, and ISBN input fields.
*It creates a new Book object using the retrieved values.
*It creates a new UI object.
*It validates whether all input fields are filled in. If any of them is empty, it displays an error message using showAlert.
*If all fields are filled, it adds the book to the list using addBookToList, shows a success message, and clears the input fields.
*Finally, it prevents the default form submission behavior to prevent the page from refreshing. */