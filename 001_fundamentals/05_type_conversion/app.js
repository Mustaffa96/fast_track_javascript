//NOTE: If you are confuse with this kind of script, please comment and try to display one-by-one output of data types

let val;

// Number to String
val = 5;
val = String(555); // 
val = String(4 + 4); // will overwrite previous value of val

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]); // 1,2,3,4 - string - 7

// toString()
val = (5).toString(); // 5, string, 1
val = true.toString(); // true, string, 4

// String to number
val = Number("5"); //gives 5 at console.log(val.toFixed()) , undefined for length
val = Number(true); //gives 1 at console.log(val.toFixed()) , undefined for length
val = Number(false); //gives 0 at console.log(val.toFixed()) , undefined for length
val = Number(null); //gives 0 at console.log(val.toFixed()) , undefined for length
val = Number("hello"); //gives NaN at console.log(val.toFixed()) , undefined for length
val = Number([1, 2, 3]); //gives NaN at console.log(val.toFixed()) , undefined for length

val = parseInt("100.30"); //100 - number - undefined - 100
val = parseFloat("100.30"); //100.3 - number - undefined - 100 - 100.30

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());
console.log(val.toFixed(2)); // 2 decimal points

const val1 = String(5);
const val2 = 6;
//const sum = val1 + val2; // it will give 56
const sum = Number(val1 + val2); //also give 56 but in form of Number, not String

console.log(sum);
console.log(typeof sum);
