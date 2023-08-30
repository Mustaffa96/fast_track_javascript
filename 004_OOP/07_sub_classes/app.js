class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person { // The Customer class is a subclass of Person and extends its functionality.
  constructor(firstName, lastName, phone, membership) { // The constructor of Customer accepts additional parameters: phone and membership.
    super(firstName, lastName); // It calls the superclass constructor (super(firstName, lastName)) to initialize the firstName and lastName properties inherited from the Person class.

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());

/* Method and Static Method Calls:

The greeting() method of the john instance is called using john.greeting(), which outputs a personalized greeting message.
The getMembershipCost() static method of the Customer class is called using Customer.getMembershipCost(), which outputs the membership cost value. */