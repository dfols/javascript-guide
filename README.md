# JavaScript Guide

This guide is designed to provide a comprehensive overview of Javascript, a
versatile programming language widely used for web development. JavaScript is an
essential pillar of the modern web, powering interactive elements, complex web
applications, and much more.

## Interactive Learning with Provided Files

1. **Type Javascript Code**: Open the script.js file in your preferred code
   editor and start typing your JavaScript code.

2. **View in Browser with Live Server**: Open the provided HTML file in a
   browser using a live server. A live server will automatically reload the page
   whenever you save changes to the files.

3. **View JavaScript Output in Dev Tools**: To see the output of your JavaScript
   code, open the developer tools in your browser (usually by pressing F12 or
   right-clicking on the page and selecting "Inspect"). Go to the "Console" tab
   in the developer tools. This is where any output from your JavaScript code
   will be displayed.

4. **Run and Experiment**: As you go through this guide, type in the examples
   and experiment with them. Modify the code, try different things, and see what
   happens. This hands-on approach will enhance your understanding and retention
   of JavaScript concepts.

## Table of Contents

1. [Variables and Variable Types](#variables-and-variable-types)
   - const, let, var
   - Types of values
2. [Expressions vs Statements](#expressions-vs-statements)
3. [Arithmetic Operators](#arithmetic-operators)
4. [Assignment Operators](#assignment-operators)
5. [Comparison Operators](#comparison-operators)
6. [Logical Operators](#logical-operators)
7. [Conditional Statements](#conditional-statements)
8. [Loops](#loops)
9. [Functions](#functions)
   - Parameters
   - Arguments
10. [Objects](#objects)
    - Creation
    - Accessing Properties
11. [Prompt, Alert, and Confirm](#prompt-alert-and-confirm)
12. [Linking a JavaScript File in HTML](#linking-a-javascript-file-in-html)
13. [Scope](#scope)
    - Local
    - Global
    - Closures
14. [Modern JavaScript Features](#modern-javascript-features)
    - Arrow Functions
    - Template Strings
    - Spread Operator
    - Destructuring

---

### Variables and Variable Types

Variables are used to store data values. JavaScript is a dynamically typed
language, which means you don't have to specify the type of data that a variable
will store.

```javascript
// Declaring a constant variable. This value cannot be changed
// once it's set.
const myConstant = 10;

// Declaring a variable that can be reassigned to a new value.
let myVariable = 20;

// 'var' is the old way of declaring variables, but it's better
// to use 'let' or 'const'.
var myOldVariable = 30;
```

#### Number

The Number data type can represent both integers (whole) and floating-point
(decimal) numbers.

```javascript
// Declaring numbers
let integer = 10;
let floatingPoint = 10.5;

// 'typeof' returns the type of a variable
// Expected output: "number"
console.log(typeof integer);

// Arithmetic operations
let sum = integer + 5; // 15
let difference = integer - 5; // 5
let product = integer * 2; // 20
let quotient = integer / 2; // 5

// Modulus operator returns the remainder of division
// Expected output: 1
console.log(11 % 2);

// Exponentiation
// Expected output: 100
console.log(10 ** 2);
```

#### Boolean

Booleans represent one of two values: `true` or `false`. They are typically used
for conditional testing.

```javascript
// Declaring booleans
const isTrue = true;
const isFalse = false;

// 'typeof' returns the type of a variable
// Expected output: "boolean"
console.log(typeof isTrue);

// Logical operations
// AND (&&) - true if both operands are true
// Expected output: false
console.log(isTrue && isFalse);

// OR (||) - true if at least one of the operands is true
// Expected output: true
console.log(isTrue || isFalse);

// NOT (!) - negates the value
// Expected output: false
console.log(!isTrue);

// Comparison
// Equal to
// Expected output: true
console.log(10 == 10);

// Not equal to
// Expected output: true
console.log(10 != 5);

// Strictly equal (checks value and type)
// Expected output: false
console.log(10 === "10");

// Greater than
// Expected output: true
console.log(10 > 5);

// Less than
// Expected output: false
console.log(10 < 5);
```

#### String

Strings are sequences of characters used to represent text. They can be enclosed
in single quotes (`'`), double quotes (`"`), or backticks (`).

```javascript
// Declaring a string
const myString = "Hello, World!";

// 'typeof' returns the type of a variable
// Expected output: "string"
console.log(typeof myString);

// Strings are indexed like arrays
// Expected output: "H" (first character of the string)
console.log(myString[0]);

// 'length' property returns the number of characters
// Expected output: 13 (length of "Hello, World!")
console.log(myString.length);

// 'indexOf' returns the position of the substring
// Expected output: 7 (position of "World")
console.log(myString.indexOf("World"));

// 'startsWith' checks if the string starts with the given characters
// Expected output: true
console.log(myString.startsWith("Hello"));

// 'slice' extracts a section of a string
// Expected output: "Hello"
console.log(myString.slice(0, 5));
```

#### Array

Arrays are special variables that can hold more than one value at a time. Each
element can be of any data type, and you can access elements using their index.

```javascript
// Array creation
const myArray = [1, 2, 3, 4, 5];

// filter - creates a new array with elements that pass the test
// implemented by the provided function
// Expected output: [2, 4]
console.log(myArray.filter((number) => number % 2 === 0));

// map - creates a new array with the results of calling a provided function
// on every element in the calling array
// Expected output: [1, 4, 9, 16, 25]
console.log(myArray.map((number) => number * number));

// pop - removes the last element from an array and returns that element
// After pop: [1, 2, 3, 4]
myArray.pop();
console.log(myArray);

// push - adds one or more elements to the end of an array
// and returns the new length of the array
// After push: [1, 2, 3, 4, 5]
myArray.push(5);
console.log(myArray);
```

#### Undefined

`undefined` is a special value that indicates that a variable has not been
assigned a value. When you declare a variable but do not assign a value to it,
its value is `undefined` by default.

```javascript
// Declaring a variable without assigning a value
let myVar;

// The value of myVar is undefined
// Expected output: undefined
console.log(myVar);

// 'typeof' returns the type of a variable
// Expected output: "undefined"
console.log(typeof myVar);
```

#### Null

`null` is another special value which represents the intentional absence of any
object value. It is often used to indicate that a variable should have no value.

```javascript
// Assigning null to a variable
let myVar = null;

// Expected output: null
console.log(myVar);

// 'typeof' returns the type of a variable
// Interestingly, for historical reasons, typeof null returns "object".
// Expected output: "object"
console.log(typeof myVar);

// To explicitly check for null, you can use strict equality
// Expected output: true
console.log(myVar === null);
```

Both `undefined` and `null` are often considered "empty" values, but they are
not the same. `undefined` means that a variable has been declared but has not
yet been assigned a value, whereas `null` is an assignment value that represents
no specific object.

### Expressions vs Statements

An expression is a piece of code that produces a value. It can be a single
value, a variable, or a more complex operation.

A statement performs an action. If statements, loops, and function declarations
are examples of statements.

#### Expression

```javascript
3 + 5; // Expression - it produces a value which is the sum of 3 and 5
myVariable; // Expression - it produces the value stored in 'myVariable'
2 * (x + y); // Expression - it produces a value based on the values of x and y
```

#### Statement

```javascript
if (condition) {
  // 'if' is a statement that performs different actions
  // based on different conditions
}

for (let i = 0; i < 5; i++) {
  // 'for' is a statement used for looping
}

function myFunction() {
  // 'function' is a statement for defining a function
}

// Statement - it does not produce a value but performs the action
// of assigning 3 to x
let x = 3;
```

### Arithmetic Operators

Arithmetic operators take numerical values (either literals or variables) as
their operands and return a single numerical value. They are used for common
arithmetic operations.

```javascript
console.log(3 + 4); // Addition, Expected output: 7
console.log(5 - 2); // Subtraction, Expected output: 3
console.log(6 * 2); // Multiplication, Expected output: 12
console.log(8 / 4); // Division, Expected output: 2
console.log(7 % 3); // Modulus (Remainder), Expected output: 1
```

### Assignment Operators

Assignment operators assign a value to a variable. The basic assignment operator
is equal (`=`), which assigns the value of its right operand to its left
operand.

```javascript
let a = 5; // Assigns the value 5 to 'a'
a += 2; // Addition assignment, Same as a = a + 2
a -= 3; // Subtraction assignment, Same as a = a - 3
a *= 4; // Multiplication assignment, Same as a = a * 4
a /= 2; // Division assignment, Same as a = a / 2
a %= 3; // Remainder assignment, Same as a = a % 3
```

### Comparison Operators

Comparison operators are used to compare two values. These operators return a
boolean value, either `true` or `false`. They are often used in conditional
statements.

```javascript
// Equality (loose), compares values irrespective of type
// Expected output: true
console.log(5 == "5");

// Inequality (loose), the opposite of ==
// Expected output: false
console.log(5 != "5");

// Equality (strict), compares both value and type
// Expected output: false
console.log(5 === "5");

// Inequality (strict), the opposite of ===
// Expected output: true
console.log(5 !== "5");

// Greater than
// Expected output: true
console.log(5 > 3);

// Less than
// Expected output: false
console.log(5 < 3);

// Greater than or equal to
// Expected output: true
console.log(5 >= 5);

// Less than or equal to
// Expected output: false
console.log(5 <= 4);
```

### Logical Operators

Logical operators are used to determine the logic between multiple conditions.
They return a boolean value based on the logic of the conditions.

```javascript
// Logical AND, returns true if both operands are true
// Expected output: false
console.log(true && false);

// Logical OR, returns true if at least one operand is true
// Expected output: true
console.log(true || false);

// Logical NOT, negates the value,
// turns true to false and vice versa
// Expected output: false
console.log(!true);
```

### Conditional Statements

Conditional statements allow you to execute different code based on different
conditions. This is used for decision making in code.

```javascript
const age = 18;

// 'if' - executes code block if the condition is true
if (age >= 18) {
  console.log("You are an adult.");
}
// 'else if' - executes if the previous condition is false
// and the current condition is true
else if (age >= 13) {
  console.log("You are a teenager.");
}
// 'else' - executes if all the preceding conditions are false
else {
  console.log("You are a child.");
}

// Ternary operator - shorthand for the if-else statement
const message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message);
```

### Loops

Loops are used to execute a block of code a number of times, which is handy when
you want to run the same code repeatedly, each time with a different value.

```javascript
let i = 0;

// 'while' loop - code block will continue to execute
// as long as the condition is true
while (i < 3) {
  console.log(i);
  i++;
}

// 'do while' loop - code block will execute once,
// and then will continue to execute as long as the condition is true
do {
  console.log(i);
  i--;
} while (i > 0);

// 'for' loop - the most structured loop, with a counter (usually a number),
// a condition, and an incrementer
for (let j = 0; j < 3; j++) {
  console.log(j);
}

const array = [1, 2, 3];

// 'for...of' loop - iterates over iterable objects (like arrays or strings),
// and access the value
for (const element of array) {
  console.log(element);
}

// 'for...in' loop - iterates over the properties of an object
// (the object keys), usually used for objects
for (const index in array) {
  console.log(index);
}

// 'forEach' loop - executes a provided function once for each array element
array.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});
```

### Functions

Functions are reusable blocks of code that perform a specific task. They can
take input, called parameters, and return an output.

```javascript
function addNumbers(a, b) {
  // This function takes two parameters, 'a' and 'b', and returns their sum.
  return a + b;
}
console.log(addNumbers(2, 3)); // Calling the function with arguments 2 and 3, Expected output: 5
```

### Objects

Objects are collections of key-value pairs. The keys are strings (or Symbols),
and the values can be of any data type.

#### Creation and Accessing Properties

```javascript
// Creating an object using object literal syntax
const person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};

// Creating an object using the 'new' keyword
const anotherPerson = new Object();
anotherPerson.name = "Jane Doe";
anotherPerson.age = 25;
anotherPerson.isEmployed = false;

// Accessing properties using dot notation
console.log(person.name); // Expected output: 'John Doe'
console.log(anotherPerson.age); // Expected output: 25

// Accessing properties using bracket notation
console.log(person["isEmployed"]); // Expected output: true
console.log(anotherPerson["name"]); // Expected output: 'Jane Doe'

// Useful when the property name is stored in a variable
const propertyName = "age";
console.log(person[propertyName]); // Expected output: 30
```

### Prompt, Alert, and Confirm

#### Alert

The `alert` method displays a dialog box with a message and an OK button.

```javascript
alert("This is an alert dialog.");
```

#### Prompt

The `prompt` method displays a dialog box that prompts the user for input.

```javascript
const name = prompt("Please enter your name");
console.log(name); // Expected output: whatever the user entered
```

#### Confirm

The `confirm` method displays a dialog box with a specified message, along with
an OK and a Cancel button.

```javascript
// Asks user for confirmation and stores the response
// Expected output: true if OK is pressed, false if Cancel is pressed
const userConfirmation = confirm("Do you want to continue?");
console.log(userConfirmation);
```

### Linking a JavaScript File in HTML

To link a JavaScript file in your HTML, you can use the `<script>` tag. This tag
should be placed just before the closing `</body>` tag for performance reasons.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
  </head>
  <body>
    <!-- Your HTML content goes here -->

    <!-- Linking the JavaScript file -->
    <script src="path-to-your-javascript-file.js"></script>
  </body>
</html>
```

By placing the `<script>` tag at the bottom of the body, it ensures that the
HTML content is loaded before the JavaScript executes, preventing any issues
with trying to manipulate or interact with elements that have not yet been
rendered on the page.

### Scope

Scope defines the accessibility or visibility of variables, functions, and
objects in some particular code during runtime. It specifies the portion of the
code where a variable can be accessed.

#### Local Scope

Local scope refers to variables that are only accessible within a specific
portion of the code, such as inside a function.

```javascript
function showName() {
  // 'name' is defined within the function, and so it has a local scope
  const name = "Alice";
  // Accessible within the function
  console.log(name);
}
showName();
// Will produce a ReferenceError because 'name' is out of scope
console.log(name);
```

#### Global Scope

A variable that is declared outside a function or a code block is said to be
defined in the global scope. This means it can be accessed from any part of the
code, including within functions.

```javascript
// 'name' is declared outside the function, making it globally scoped
const name = "Alice";

function showName() {
  // Accessible within the function because 'name' is global
  console.log(name);
}
// Expected output: 'Alice'
showName();

// Expected output: 'Alice'
console.log(name);
```

#### Closures

A closure is a function that has access to its own scope, the outer function’s
scope, and the global scope. This is a powerful feature because it allows for
data encapsulation and functional programming patterns.

```javascript
function outer() {
  const outerVar = "I am from outer function";
  function inner() {
    console.log(outerVar); // 'inner' has access to 'outerVar' because of closure
  }
  return inner;
}
const innerFunction = outer();
innerFunction(); // Expected output: 'I am from outer function'
```

### Modern JavaScript Features

#### Arrow Functions

Arrow functions allow for a shorter syntax when writing functions. They also
have a different behavior for `this` compared to regular functions, as they
don't bind their own `this` but inherit it from the enclosing scope.

```javascript
const add = (a, b) => a + b; // Shorter syntax compared to a traditional function expression
console.log(add(2, 3)); // Expected output: 5
```

#### Template Strings

Template strings are string literals that allow embedded expressions, and they
can be multi-line. You can include variables and expressions within template
strings using `${}`.

```javascript
const name = "Alice";
// Expected output: 'Hello, Alice!'
console.log(`Hello, ${name}!`);
```

#### Spread Operator

The spread operator allows an iterable (like an array) to be expanded in places
where zero or more elements are expected. It is useful for concatenating arrays
or passing elements of an array as arguments to a function.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread operator expands arr1 into individual elements
console.log(arr2); // Expected output: [1, 2, 3, 4, 5]
```

#### Destructuring

Destructuring is a modern feature that allows you to unpack values from arrays,
or properties from objects, into distinct variables. This can make working with
arrays and objects more concise and readable.

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person; // Destructuring the object into separate variables
console.log(name); // Expected output: 'Alice'
console.log(age); // Expected output: 25
```
