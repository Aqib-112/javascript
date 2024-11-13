// Array Destructuring
//Array destructuring in JavaScript allows you to unpack values from arrays and assign them to variables in a concise way.

const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//---------------------------------------------------------->

// Skipping Elements
// We can skip elements in an array by leaving blank spaces with commas

const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(first); // 1
console.log(third); // 3

//---------------------------------------------------------->

//Default Values
// If there are fewer values in the array than variables in the destructuring assignment, you can set default values for any variable.

const colors = ["red", "green"];
const [primary, secondary, tertiary = "blue"] = colors;
console.log(tertiary); // "blue" (default value)

//---------------------------------------------------------->

// Swapping Variables
// Destructuring allows you to swap values between two variables without needing a temporary variable.

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

//---------------------------------------------------------->

// Rest Operator with Destructuring
// The rest operator ... can be used to capture the remaining elements of an array into a new array.

const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, secondFruit, ...restFruits] = fruits;
console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"
console.log(restFruits); // ["cherry", "date"]

//---------------------------------------------------------->

//  Nested Array Destructuring
// We can use destructuring to unpack values from nested arrays.

const number = [1, [2, 3], 4];
const [one, [two, three], four] = number;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4

//---------------------------------------------------------->

//  Using Array Destructuring in Function Parameters
// Array destructuring can also be used to handle function parameters, which can be helpful when dealing with arrays as function arguments.

function sum([a, b, c]) {
  return a + b + c;
}
const num = [1, 2, 3];
console.log(sum(num)); // 6

//---------------------------------------------------------->
//-----------------Object Destructuring ---------------------//
//----------------------------------------------------------->

//  Object destructuring in JavaScript allows you to extract properties from objects and assign them to variables.

// Syntax

const object = { key1: value1, key2: value2 };
const { key1, key2 } = object;
console.log(key1); // value1
console.log(key2); // value2

//--------------------------------------------------------->

// Assigning to Variables with the Same Property Names
// When destructuring, properties are assigned to variables with the same names as the object’s keys.

const person = {
  name: "Ali",
  age: 25,
};
const { name, age } = person;
console.log(name); // "Ali"
console.log(age); // 25

//---------------------------------------------------------->

// Assigning to New Variable Names
// You can rename properties by specifying the variable name you want to assign to.

const persons = {
     name: "Ali",
      age: 25 
    };
const { name: personsName, age: personsAge } = persons;
console.log(personsName); // "Ali"
console.log(personsAge);  // 25

//---------------------------------------------------------->

// Default Values
// If a property doesn’t exist in the object, you can assign it a default value.

const per = { nam: "Ali" };
const { nam, ag = 30 } = per;
console.log(nam); // "Ali"
console.log(ag);  // 30 (default value since `ag` is not in `per`)

//---------------------------------------------------------->

//  Nested Object Destructuring
// Destructuring also works on nested objects, allowing you to access deeper properties directly

const men = {
    name: "Ali",
    address: {
      city: "xyz",
      zip: "12345"
    }
  };
  const { address: { city, zip } } = men;
  console.log(city); // "xyz"
  console.log(zip);  // "12345"
  
//---------------------------------------------------------->

// Destructuring in Function Parameters
// Object destructuring is often used directly in function parameters, especially when passing configuration objects.

function greet({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  const persn = { name: "Ali", age: 25 };
  greet(persn); 
  

  

