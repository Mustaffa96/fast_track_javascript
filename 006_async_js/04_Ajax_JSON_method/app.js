/* This code is JavaScript code that handles two buttons in an HTML document, allowing you to load customer information from JSON files when you click the buttons. 
Here's a brief explanation of what this code does: */


document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);
/* uses the addEventListener method to attach click event handlers to two HTML buttons with IDs "button1" and "button2." */
/* When "button1" is clicked, it triggers the loadCustomer function, and when "button2" is clicked, it triggers the loadCustomers function. */

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}
/* The loadCustomer function makes an XMLHttpRequest to fetch data from a "customer.json" file. 
This file likely contains information about a single customer in JSON format. */

/* Once the data is loaded successfully (HTTP status code 200), it parses the JSON response and generates HTML content representing the customer's details. 
It then updates the content of an HTML element with the ID "customer" with the generated HTML. */

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

/* The loadCustomers function is similar to loadCustomer but fetches data from a "customers.json" file, which likely contains an array of customer objects. 
It then iterates through the array, generating HTML content for each customer, and updates an HTML element with the ID "customers" with the aggregated HTML. */


/* In summary, this code provides functionality for loading and displaying customer information from JSON files when specific buttons are clicked on an HTML page. 
It uses XMLHttpRequest to fetch data asynchronously and dynamically updates the webpage content based on the retrieved data. */