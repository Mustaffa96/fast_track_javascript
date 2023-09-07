class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
/* The Book class is a constructor function for creating book objects. 
It takes three parameters: title, author, and isbn (International Standard Book Number). 
When a new Book object is created, it stores these values as properties of the object. */

class UI {
	/* The UI class is responsible for handling the user interface interactions of the application. */
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
  /* This method takes a book object as a parameter and adds it to the HTML table with the ID book-list. 
  It creates a new table row (<tr>) with the book's information and appends it to the table. */

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
  /* This method displays an alert message on the UI. 
  It creates a div element, sets its class to indicate the type of message (e.g., 'success' or 'error'), adds the message text, and inserts it into the UI. After 3 seconds, the alert is removed. */

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  /* This method deletes a book from the UI. 
  It checks if the target element that triggered the delete action has the class 'delete' (which would be the 'X' link for deleting a book). 
  If so, it removes the corresponding table row from the UI. */

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}
/* This method clears the input fields in the form. */

// Local Storage Class
class Store {
	/* This class is responsible for managing the local storage of book data. */
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  } /* This static method retrieves the list of books from local storage. If no data is found, it initializes an empty array. */

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  } /* This static method displays the books from local storage on the UI. It retrieves the books, creates a new UI instance, and calls addBookToList() for each book. */ 

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  } /* This static method adds a book to local storage. It retrieves the existing books, pushes the new book onto the array, and updates the local storage with the updated list of books. */

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  } /* This static method removes a book from local storage based on its ISBN. It retrieves the books, finds the book with the matching ISBN, removes it from the array, and updates local storage. */
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks); 
/* The DOMContentLoaded event listener calls Store.displayBooks() when the DOM is fully loaded. This ensures that the list of books stored in local storage is displayed when the page loads. */

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

    // Add to LS
    Store.addBook(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
}); 
/* It creates a Book object from the form data, validates it, adds it to the UI, adds it to local storage, and displays a success or error message. */

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});
/* When a click event occurs, it checks if the clicked element has the class 'delete,' and if so, it deletes the corresponding book from the UI and local storage and displays a success message. */