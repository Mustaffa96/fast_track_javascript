const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}
// greeting is prototype

const jane = Object.create(personPrototypes);
jane.firstName = 'Jane';
jane.lastName = 'Doe';
jane.age = 30;

jane.getsMarried('Thompson');

console.log(jane.greeting());

// In the provided code, an object named jane is being created using the Object.create() method. It's based on the prototype object personPrototypes. Properties like firstName, lastName, and age are added directly to the jane object to define its specific data.

// The getsMarried function is assumed to be a method defined on the personPrototypes object, and it's called on the jane object to simulate her getting married, changing her last name to 'Thompson'.

const john = Object.create(personPrototypes, {
  firstName: {value: 'John'},
  lastName: {value: 'Doe'},
  age: {value: 36}
});

console.log(john);

console.log(john.greeting());