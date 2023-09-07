A string method in JavaScript is a built-in function that can be used to manipulate and perform various operations on strings (sequences of characters). These methods allow you to change, extract, or manipulate parts of a string.

Here's an example based on the W3Schools website:

```javascript
// Example string
var str = "Hello, World!";

// Example methods:

// 1. length: Returns the length of the string
var length = str.length; // length will be 13

// 2. toUpperCase(): Converts the string to uppercase
var upperCaseStr = str.toUpperCase(); // upperCaseStr will be "HELLO, WORLD!"

// 3. toLowerCase(): Converts the string to lowercase
var lowerCaseStr = str.toLowerCase(); // lowerCaseStr will be "hello, world!"

// 4. indexOf(): Returns the position of a specified substring within the string
var indexOfWorld = str.indexOf("World"); // indexOfWorld will be 7

// 5. substring(): Extracts a part of the string based on indices
var extractedStr = str.substring(0, 5); // extractedStr will be "Hello"

// 6. replace(): Replaces a substring with another string
var replacedStr = str.replace("World", "Universe"); // replacedStr will be "Hello, Universe!"
```

These are just a few examples of string methods in JavaScript. There are many more methods available for working with strings, each serving different purposes and enabling you to perform various operations on text data.