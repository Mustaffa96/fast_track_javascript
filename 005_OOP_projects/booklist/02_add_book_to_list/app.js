// Book Constructor
/* This is a constructor function that defines the structure of a Book object. 
It takes three parameters: title, author, and isbn (International Standard Book Number). The this keyword is used to assign these parameters as properties of the created object. */

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
/* his is another constructor function that doesn't take any parameters. 
It's used to define methods related to updating the user interface. */

function UI() {}

// Add Book To List
/* The addBookToList method is added to the UI prototype. 
This method takes a book object as a parameter. 
It first grabs the book-list element from the HTML document. 
Then it creates a new table row (<tr>) and fills it with the values from the book object, including the title, author, ISBN, and a delete link (<a>). 
This row is then appended to the book-list element. */

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

// Clear Fields
/* The clearFields method is also added to the UI prototype. 
This method is responsible for clearing the input fields on the form after a book has been added to the list. 
It selects the title, author, and ISBN input elements and sets their value properties to an empty string. */

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
/* An event listener is attached to the form with the ID book-form. 
This event listener listens for the submit event of the form. 
When the form is submitted (i.e., the user clicks the submit button), the listener function is executed. 
Inside the function, the values of the title, author, and ISBN input fields are grabbed from the DOM. 
Then, a new Book object is created using these values. 
An instance of the UI constructor is also created. 
The addBookToList method of the UI instance is called to add the book to the list on the web page. 
After that, the clearFields method is called to clear the input fields. Finally, e.preventDefault() is used to prevent the default form submission behavior, which would cause the page to reload. */

document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();
 
  // Add book to list
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
});