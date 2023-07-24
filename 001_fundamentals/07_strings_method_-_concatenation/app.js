const firstName = "Ali";
const lastName = "Abu";
const age = 45;
const str = "Hello there, my name is Zamri";
const tags = "web design,web development,programmer";

let val;

//Please uncomment one-by-one to display the output

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName; //give space on name

// Append - not replace but add on variables
val = "Mustaffa ";
//val = "Zakaria"; // '=' will replace previous val
val += "Zakaria"; // '+=' will combine with previous val

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait"; //combining double quotes with apostrophe to prevent error if the sentence contain apos
val = "Thats awesome, I can't wait"; //also can put backslash to prevent from error

// Length
val = firstName.length; // how many characters contain in A-L-I

// concat()
val = firstName.concat(" ", lastName); // still get same as val = firstName + " " + lastName;

// Change case
val = firstName.toUpperCase(); // change name in UPPERCASE format
val = firstName.toLowerCase(); // change name in lowercase format

val = firstName[0]; // Obtain 0 index string a.k.a first position of firstName letter

// indexOf()
val = firstName.indexOf("l"); // it will find letter 'L' in firstName and gives index or position
val = firstName.lastIndexOf("l"); // it will find letter 'L' in firstName but in last position if 'L' contain more than one

// charAt()
val = firstName.charAt("2"); // it will give letter at index at 2 in [A,L,I]
//Get last char
val = firstName.charAt(firstName.length - 1); // it always give the last char

// substring()
val = firstName.substring(0, 2); // give char that exclude the last char

// slice()
val = firstName.slice(-2); // almost same with substring() but slice() can put negative number on it

// split()
val = str.split(" "); // we split element in str with space to each other
val = tags.split(","); // split by comma

// replace()
val = str.replace("Zainal", "Abidin"); // replace value

// includes
val = str.includes("foo"); // gives value true or false if value is match with the origin in str

console.log(val);
