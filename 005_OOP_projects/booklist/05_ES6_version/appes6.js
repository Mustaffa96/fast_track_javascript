class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
/* This class defines a Book object constructor. 
Each book has properties like title, author, and isbn. When you create a new Book object, you provide these values as arguments to the constructor, and it initializes the object with these properties. */

class UI {
	/* This class defines a set of methods for interacting with the user interface of the web page. 
	It includes methods for adding books to a list, showing alerts, deleting books, and clearing form fields. */
	
  addBookToList(book) {
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
  /* This method takes a book object as a parameter and adds it to an HTML table with the id book-list. 
  It creates a new row (<tr>) in the table and inserts columns (<td>) for the book's title, author, ISBN, and a delete link (<a>). */

  showAlert(message, className) {
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
  /* This method displays an alert message on the web page. It creates a <div> element with a specified className (e.g., 'alert success' or 'alert error') and a message text. 
  The alert is inserted into the document, and after 3 seconds, it is removed. */

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  /* This method is used to delete a book from the list when the delete button (with the class 'delete') is clicked. 
  It navigates the DOM to find the parent elements and removes the entire row (<tr>) containing the book's information. */

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  /* This method clears the input fields (title, author, and ISBN) on the web form by setting their values to empty strings. */
}

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

  console.log(ui);

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

/* The code sets up two event listeners to handle user interactions:

* The first event listener is attached to the form with the id book-form. It listens for the form submission event (submit) and performs actions like creating a Book object, adding it to the list, showing alerts, and clearing the form fields.

* The second event listener is attached to the list with the id book-list. It listens for clicks within the list and handles book deletion, showing a success message, and preventing the default link behavior. */


/* ES6 introduced a more concise and structured way to define classes using the class keyword. In ES5, you typically used constructor functions to achieve similar functionality, but the syntax was less clear and more error-prone. */
