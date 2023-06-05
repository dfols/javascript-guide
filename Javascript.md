### what is it?

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It was created in 1995 by Brendan Eich while he was an engineer at Netscape. Originally designed to add interactivity to websites, it has since become one of the core technologies of the web, alongside HTML and CSS.

Here are some key points about JavaScript:

**Interactivity on websites:** JavaScript is primarily used to enhance the interactivity of a website. It can be used to create features like interactive forms, animated graphics, photo slideshows, and complex user interface patterns. For example, JavaScript can respond to user actions such as clicks or key presses, change the content or style of an HTML page dynamically, or fetch new data from the server without reloading the page (a technique known as Ajax).
    
**Client-side and server-side:** Although traditionally a client-side language run in the web browser, JavaScript can also be used on the server-side through technologies like Node.js. This means that JavaScript can be used to build entire web applications from front to back.


### how to run JS code
* in the browser you can type in the console
* adding `<script>` tag inside of html
	* `src=""`
* using node

### variable declaration / initialization


![[Screenshot 2023-06-05 at 4.56.14 PM.png]]

### types of variables
1. Number
2. String
3. Boolean
4. Object
5. Array
6. null
7. undefined
8. Function
9. Symbol (dont worry about it for now)




### alert / prompt / confirm

````javascript
alert("Hello");
````

```javascript
let age = prompt("How old are you?, 100);
alert("You are " + age + "years old!"); // You are 100 years old!
```

```javascript
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed
```
### functions

```javascript
function add(a, b) {
  return a + b;
}
```

```javascript
const multiply = function(a, b) {
  return a * b;
};
```

```javascript
const divide = (a, b) => {
  return a / b;
};
```

### objects

```javascript
// Create an object
const person = {
  name: 'John',
  age: 30,
  profession: 'Engineer'
};

// Access properties using dot notation
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.profession); // Output: Engineer
```
### comparisons
1. < or >
	1. <= or >=
2. ==
3. !=
```javascript
let age = 18;

// Check the age using if/else statements
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not old enough to vote yet.");
}
```

### loops

for

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

while

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```