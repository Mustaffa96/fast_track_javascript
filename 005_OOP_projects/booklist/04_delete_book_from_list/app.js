// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
/* The Book constructor is defined to create book objects. 
It takes three parameters: title, author, and isbn (International Standard Book Number) and assigns them as properties to the newly created book object. */

// UI Constructor
function UI() {}
/* The UI constructor is defined to handle the user interface interactions. It doesn't take any parameters. */

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
/* This method is added to the UI prototype. It's responsible for adding a book to the list in the UI. 
It takes a book object as a parameter and dynamically creates an HTML table row (<tr>) with columns for the book's title, author, ISBN, and a delete button. 
It then appends this row to the list with the id book-list. */

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
/* This method is responsible for displaying alerts on the UI. It takes two parameters: message and className. 
It dynamically creates a div element, adds a CSS class for styling (determined by className), and sets the text content of the div to the message. 
The alert is inserted into the UI before the form element with the id book-form, and it disappears after 3 seconds using setTimeout. */

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}
/* This method handles the deletion of a book from the list. It takes a target element as a parameter. 
If the target has a class name of "delete" (presumably the delete button was clicked), it finds and removes the parent row (<tr>) containing the book details. */

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
/* This method clears the input fields for title, author, and ISBN by setting their values to empty strings. */

// Event Listener for add book
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
/* An event listener is added to the form with the id book-form. It listens for a form submission event. When the form is submitted, it:

* Gets the values of the input fields (title, author, and ISBN).
* Instantiates a new Book object with the provided values.
* Instantiates a new UI object.
* Validates if any of the fields are empty, displaying an error alert if needed.
* If all fields are filled, it adds the book to the list, displays a success alert, and clears the input fields. */

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});
/* Another event listener is added to the list with the id book-list. It listens for click events within the list. When a click event occurs, it:

* Instantiates a new UI object.
* Calls the deleteBook method to remove the clicked book from the list.
* Displays a success alert for book removal. */