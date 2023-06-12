const array = [1, 2, 3];

// 'for...of' loop - iterates over iterable objects (like arrays or strings),
// and access the value
for (const element of array) {
  console.log(element);
}

// 'for...in' loop - iterates over the properties of an object
// (the object keys), usually used for objects
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (const key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
for (const index in array) {
  console.log(index);
}

// 'forEach' loop - executes a provided function once for each array element
array.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});
