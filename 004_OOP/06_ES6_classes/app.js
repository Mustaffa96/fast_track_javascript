// Class Definition (Person):
// The code defines a class called Person using the class keyword. 
// This class has a constructor method to initialize instances of the class with three parameters: firstName, lastName, and dob (date of birth).
class Person {
	// Constructor Methods
  constructor(firstName, lastName, dob) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  } // The constructor method takes the provided parameters and assigns them as properties of the instance being created. Additionally, it converts the dob parameter into a Date object and assigns it to the birthday property.

	// Instance Methods:

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  } // greeting(): This method returns a greeting string using the firstName and lastName properties of the instance.

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } // calculateAge(): This method calculates the age of the person based on the current date and their dob (birthday) using the Date.now() function. It then converts the time difference into years and returns the calculated age.

  getsMarried(newLastName) {
    this.lastName = newLastName;
  } // getsMarried(newLastName): This method updates the lastName property of the instance with the provided newLastName.

	// Static Method

  static addNumbers(x, y) {
    return x + y;
  } // addNumbers(x, y): This is a static method, meaning it belongs to the class itself and not to its instances. It takes two parameters, x and y, and returns their sum.
}

// Creating an Instance:

const mary = new Person('Mary', 'Williams', '11-13-1980'); // An instance of the Person class is created using the constructor with the values 'Mary', 'Williams', and '11-13-1980'. This instance is assigned to the variable mary.

// Updating Last Name:

mary.getsMarried('Thompson'); // The getsMarried() method is called on the mary instance, updating her last name to 'Thompson'.

// Logging Instance:

console.log(mary); // The mary instance is logged to the console, displaying her updated information.

// Logging Static Method Call:

console.log(Person.addNumbers(1,2)); // The static method addNumbers() is called on the Person class itself, with arguments 1 and 2. The result of the addition (3) is logged to the console.