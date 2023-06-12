# JavaScript Guide

This guide is designed to provide a comprehensive overview of JavaScript, a
versatile programming language widely used for web development. Topics will be
arranged from basic to advanced, with clear code examples and explanations.

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

### Variables and Variable Types

```javascript
const myConstant = 10; // Declaring a constant variable
let myVariable = 20; // Declaring a variable that can be reassigned
var myOldVariable = 30; // var is the old way of declaring variables
```

#### Types of values

##### String

```javascript
const myString = "Hello, World!"; // Declaring a string

console.log(typeof myString); // Expected output: "string"
console.log(myString[0]); // Expected output: "H" (string index)
console.log(myString.length); // Expected output: 13 (string length)
console.log(myString.indexOf("World")); // Expected output: 7
console.log(myString.startsWith("Hello")); // Expected output: true
console.log(myString.slice(0, 5)); // Expected output: "Hello"
```

##### Array

```javascript
const myArray = [1, 2, 3, 4, 5]; // Array creation

// filter - creates a new array with elements that pass the test
const evenNumbers = myArray.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Expected output: [2, 4]

// map - creates a new array with the results of calling a function for every array element
const squaredNumbers = myArray.map((number) => number * number);
console.log(squaredNumbers); // Expected output: [1, 4, 9, 16, 25]

// pop - removes the last element from an array
myArray.pop();
console.log(myArray); // Expected output: [1, 2, 3, 4]

// push - adds a new element to the end of an array
myArray.push(5);
console.log(myArray); // Expected output: [1, 2, 3, 4, 5]
```

### Expressions vs Statements

#### Expression

```javascript
3 + 5; // Expression
myVariable; // Expression
2 * (x + y); // Expression
```

#### Statement

```javascript
if (condition) {
  // Statement
  // code block
}

for (let i = 0; i < 5; i++) {
  // Statement
  // code block
}

function myFunction() {
  // Statement
  // code block
}

let x = 3; // Statement
```

### Arithmetic Operators

```javascript
console.log(3 + 4); // Addition, Expected output: 7
console.log(5 - 2); // Subtraction, Expected output: 3
console.log(6 * 2); // Multiplication, Expected output: 12
console.log(8 / 4); // Division, Expected output: 2
console.log(7 % 3); // Modulus (Remainder), Expected output: 1
```

### Assignment Operators

```javascript
let a = 5;
a += 2; // Same as a = a + 2
a -= 3; // Same as a = a - 3
a *= 4; // Same as a = a * 4
a /= 2; // Same as a = a / 2
a %= 3; // Same as a = a % 3
```

### Comparison Operators

```javascript
console.log(5 == "5"); // Equality (loose), Expected output: true
console.log(5 != "5"); // Inequality (loose), Expected output: false
console.log(5 === "5"); // Equality (strict), Expected output: false
console.log(5 !== "5"); // Inequality (strict), Expected output: true
console.log(5 > 3); // Greater than, Expected output: true
console.log(5 < 3); // Less than, Expected output: false
console.log(5 >= 5); // Greater than or equal to, Expected output: true
console.log(5 <= 4); // Less than or equal to, Expected output: false
```

### Logical Operators

```javascript
console.log(true && false); // Logical AND, Expected output: false
console.log(true || false); // Logical OR, Expected output: true
console.log(!true); // Logical NOT, Expected output: false
```

### Conditional Statements

```javascript
const age = 18;

if (age >= 18) {
  // if
  console.log("You are an adult.");
} else if (age >= 13) {
  // else if
  console.log("You are a teenager.");
} else {
  // else
  console.log("You are a child.");
}

// Ternary operator
const message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message);
```

### Loops

```javascript
let i = 0;
while (i < 3) {
  // while loop
  console.log(i);
  i++;
}

do {
  // do while loop
  console.log(i);
  i--;
} while (i > 0);

for (let j = 0; j < 3; j++) {
  // for loop
  console.log(j);
}

const array = [1, 2, 3];
for (const element of array) {
  // for...of loop
  console.log(element);
}

for (const index in array) {
  // for...in loop (usually for objects)
  console.log(index);
}

array.forEach((element, index) => {
  // forEach loop
  console.log(`Element at index ${index} is ${element}`);
});
```

### Functions

```javascript
function addNumbers(a, b) {
  // Parameters are a and b
  return a + b;
}
console.log(addNumbers(2, 3)); // Arguments are 2 and 3, Expected output: 5
```

### Objects

Objects in JavaScript are collections of key-value pairs. The keys are strings
(or Symbols), and the values can be of any data type.

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
const userConfirmation = confirm("Do you want to continue?");
console.log(userConfirmation); // Expected output: true if OK is pressed, false if Cancel is pressed
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

#### Local Scope

```javascript
function showName() {
  const name = "Alice"; // local scope
  console.log(name);
}
showName();
console.log(name); // ReferenceError: name is not defined
```

#### Global Scope

```javascript
const name = '

Alice'; // global scope
function showName() {
  console.log(name);
}
showName(); // Expected output: 'Alice'
console.log(name); // Expected output: 'Alice'
```

#### Closures

```javascript
function outer() {
  const outerVar = "I am from outer function";
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
const innerFunction = outer();
innerFunction(); // Expected output: 'I am from outer function'
```

### Modern JavaScript Features

#### Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Expected output: 5
```

#### Template Strings

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // Expected output: 'Hello, Alice!'
```

#### Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Expected output: [1, 2, 3, 4, 5]
```

#### Destructuring

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Expected output: 'Alice'
console.log(age); // Expected output: 25
```
