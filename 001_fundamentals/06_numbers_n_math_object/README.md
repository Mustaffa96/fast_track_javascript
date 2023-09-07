In JavaScript, number methods are built-in functions that you can use to perform various operations or manipulations on numeric values (numbers). Here's a brief explanation of a few commonly used number methods along with examples from W3school:

1. **toFixed()**: This method formats a number with a specific number of decimal places.

   Example:
   ```javascript
   var num = 5.56789;
   var formattedNum = num.toFixed(2);
   // formattedNum will be 5.57
   ```

2. **toPrecision()**: It formats a number to a specified length.

   Example:
   ```javascript
   var num = 123.456789;
   var formattedNum = num.toPrecision(4);
   // formattedNum will be 123.5
   ```

3. **toString()**: Converts a number to a string.

   Example:
   ```javascript
   var num = 42;
   var numAsString = num.toString();
   // numAsString will be "42"
   ```

4. **valueOf()**: Returns the primitive value of a number.

   Example:
   ```javascript
   var num = new Number(42);
   var primitiveValue = num.valueOf();
   // primitiveValue will be 42
   ```

5. **parseInt()**: Parses a string and returns an integer.

   Example:
   ```javascript
   var str = "42";
   var num = parseInt(str);
   // num will be 42
   ```

6. **parseFloat()**: Parses a string and returns a floating-point number.

   Example:
   ```javascript
   var str = "3.14";
   var num = parseFloat(str);
   // num will be 3.14
   ```

These are just a few of the number methods available in JavaScript. They provide a way to manipulate and work with numeric data in various ways within your JavaScript code.