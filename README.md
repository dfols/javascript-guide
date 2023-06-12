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

In JavaScript, variables are used to store data values. JavaScript is a
dynamically typed language, which means you don't have to specify the type of
data that a variable will store.

```javascript
const myConstant = 10; // Declaring a constant variable. This value cannot be changed once it's set.
let myVariable = 20; // Declaring a variable that can be reassigned to a new value.
var myOldVariable = 30; // 'var' is the old way of declaring variables, but it's better to use 'let' or 'const'.
```

#### Types of values

##### String

Strings are sequences of characters used to represent text. They can be enclosed
in single quotes (`'`), double quotes (`"`), or backticks (`).

```javascript
const myString = "Hello, World!"; // Declaring a string

console.log(typeof myString); // 'typeof' returns the type of a variable, Expected output: "string"
console.log(myString[0]); // Strings are indexed like arrays, Expected output: "H" (string index)
console.log(myString.length); // 'length' property returns the number of characters, Expected output: 13 (string length)
console.log(myString.indexOf("World")); // 'indexOf' returns the position of the substring, Expected output: 7
console.log(myString.startsWith("Hello")); // 'startsWith' checks if the string starts with the given characters, Expected output: true
console.log(myString.slice(0, 5)); // 'slice' extracts a section of a string, Expected output: "Hello"
```

##### Array

Arrays are special variables that can hold more than one value at a time. Each
element can be of any data type, and you can access elements using their index.

```javascript
const myArray = [1, 2, 3, 4, 5]; // Array creation

// filter - creates a new array with elements that pass the test implemented by the provided function
const evenNumbers = myArray.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Expected output: [2, 4]

// map - creates a new array with the results of calling a provided function on every element in the calling array
const squaredNumbers = myArray.map((number) => number * number);
console.log(squaredNumbers); // Expected output: [1, 4, 9, 16, 25]

// pop - removes the last element from an array and returns that element
myArray.pop();
console.log(myArray); // Expected output: [1, 2, 3, 4]

// push - adds one or more elements to the end of an array and returns the new length of the array
myArray.push(5);
console.log(myArray); // Expected output: [1, 2, 3, 4, 5]
```

### Expressions vs Statements

An expression is a piece of code that produces a value. It can be a single
value, a variable, or a more complex operation.

A statement performs an action. Statements do something and are executed by the
JavaScript engine. If statements, loops, and function declarations are examples
of statements.

#### Expression

```javascript
3 + 5; // Expression - it produces a value which is the sum of 3 and 5
myVariable; // Expression - it produces the value stored in 'myVariable'
2 * (x + y); // Expression - it produces a value based on the values of x and y
```

#### Statement

```javascript
if (condition) {
  // 'if' is a statement that

 performs different actions based on different conditions
  // code block
}

for (let i = 0; i < 5; i++) {
  // 'for' is a statement used for looping
  // code block
}

function myFunction() {
  // 'function' is a statement for defining a function
  // code block
}

let x = 3; // Statement - it does not produce a value but performs the action of assigning 3 to x
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
console.log(5 == "5"); // Equality (loose), Expected output: true - compares values irrespective of type
console.log(5 != "5"); // Inequality (loose), Expected output: false - the opposite of ==
console.log(5 === "5"); // Equality (strict), Expected output: false - compares both value and type
console.log(5 !== "5"); // Inequality (strict), Expected output: true - the opposite of ===
console.log(5 > 3); // Greater than, Expected output: true
console.log(5 < 3); // Less than, Expected output: false
console.log(5 >= 5); // Greater than or equal to, Expected output: true
console.log(5 <= 4); // Less than or equal to, Expected output: false
```

### Logical Operators

Logical operators are used to determine the logic between multiple conditions.
They return a boolean value based on the logic of the conditions.

```javascript
console.log(true && false); // Logical AND, Expected output: false - returns true if both operands are true
console.log(true || false); // Logical OR, Expected output: true - returns true if at least one operand is true
console.log(!true); // Logical NOT, Expected output: false - negates the value, turns true to false and vice versa
```

### Conditional Statements

Conditional statements allow you to execute different code based on different
conditions. This is used for decision making in code.

```javascript
const age = 18;

if (age >= 18) {
  // 'if' - executes code block if the condition is true
  console.log("You are an adult

.");
} else if (age >= 13) {
  // 'else if' - executes if the previous condition is false and the current condition is true
  console.log("You are a teenager.");
} else {
  // 'else' - executes if all the preceding conditions are false
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
while (i < 3) {
  // 'while' loop - code block will continue to execute as long as the condition is true
  console.log(i);
  i++;
}

do {
  // 'do while' loop - code block will execute once, and then will continue to execute as long as the condition is true
  console.log(i);
  i--;
} while (i > 0);

for (let j = 0; j < 3; j++) {
  // 'for' loop - the most structured loop, with a counter (usually a number), a condition, and an incrementer
  console.log(j);
}

const array = [1, 2, 3];
for (const element of array) {
  // 'for...of' loop - iterates over iterable objects (like arrays or strings), and access the value
  console.log(element);
}

for (const index in array) {
  // 'for...in' loop - iterates over the properties of an object (the object keys), usually used for objects
  console.log(index);
}

array.forEach((element, index) => {
  // 'forEach' loop - executes a provided function once for each array element
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

Scope defines the accessibility or visibility of variables, functions, and
objects in some particular code during runtime. It specifies the portion of the
code where a variable can be accessed.

#### Local Scope

Local scope refers to variables that are only accessible within a specific
portion of the code, such as inside a function.

```javascript
function showName() {
  const name = "Alice"; // 'name' is defined within the function, and so it has a local scope
  console.log(name); // Accessible within the function
}
showName();
console.log(name); // ReferenceError: name is not defined, because it's out of scope
```

#### Global Scope

A variable that is declared outside a function or a code block is said to be
defined in the global scope. This means it can be accessed from any part of the
code, including within functions.

```javascript
const name = "Alice"; // 'name' is declared outside the function, making it globally scoped
function showName() {
  console.log(name); // Accessible within the function because 'name' is global
}
showName(); // Expected output: 'Alice'
console.log(name); // Expected output: 'Alice'
```

#### Closures

A closure is a function that has access to its own scope, the outer function’s
scope, and the global scope. This is a powerful feature in JavaScript because it
allows for data encapsulation and functional programming patterns.

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
console.log(`Hello, ${name}!`); // Embedded expression to concatenate strings, Expected output: 'Hello, Alice!'
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
