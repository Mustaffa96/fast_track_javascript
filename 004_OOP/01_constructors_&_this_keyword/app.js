// Person constructor

// Method 1

/*function Person() {
	this.name = 'Mus';
	
}*/

// const mus = new Person();
// const john = new Person();
// console.log(john); // Output still john because hard-coded the name value 'Mus'


// Method 2

/*function Person(name) {
	this.name = name;
	
}*/

// const mus = new Person();
// const john = new Person();
// console.log(john); // Output depends on what you declare in console.log

// Method 3

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const mus = new Person('Mus', 27);
// const john = new Person('John', 30);

// console.log(john.age);

const mus = new Person('Mus', '7-4-1996');
console.log(mus.calculateAge());
