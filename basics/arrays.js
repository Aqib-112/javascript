// Array

// An array is a data structure in JavaScript that holds a collection of elements, which can be of any type, including numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning the first element is accessed at index 0


// syntax
// let arrayName = [element1, element2, element3, ];

// Example

let fruitss = ["apple", "banana", "cherry"];
console.log(fruitss); 

//----------------------------------------------->

// accessing individual element

console.log(fruitss[0]); 
console.log(fruitss[2]); 

//----------------------------------------------->

// modifying elements

fruitss[1] = "blueberry"; 
console.log(fruitss); 


//----------------------------------------------->

// finding array lenght

let colors = ["red", "green", "blue"];
console.log(colors.length); 

//----------------------------------------------->

// print element of Array using Loop


let newFruit = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < newFruit.length; i++) {
    console.log(newFruit[i]);
}


//-------------------------------------------------->

// Array Methods

// Adding and removing Method

const fruits = ["apple", "banana", "cherry"];

// push()
// Adds elements  to the end of array

fruits.push("orange"); 
 
// pop()
// Removes the last element of array

fruits.pop(); 

// unshift()
// Add elements to the beginning of array

fruits.unshift("mango"); 

// shift()
// Remove the first element of array

fruits.shift(); 

//join()
// join element of array with given separator
let a = fruits.join("-")
console.log(a); 


//-------------------------------------------------->

// Merging and slicing Method

// concat()
// merge two or more arrays.

const moreFruits = ["kiwi", "pear"];
const allFruits = fruits.concat(moreFruits);

// slice()
// Returns a shallow copy of a portion of an array.

const someFruits = fruits.slice(1, 3);

// splice()
// Adds or removes elements at a specified index.

fruits.splice(0, 1, "grape"); 
console.log(fruits);


//-------------------------------------------------->

// Searching and Checking Method

// indexOf()
// Returns the index of the first occurrence of a specified element, or -1 if not found.

const index = fruits.indexOf("cherry"); 

// includes()
// Checks if an array contains a specified element.

const hasApple = fruits.includes("apple"); 


//-------------------------------------------------->

//Sorting and Reversing

// sort() 
// Sorts the elements in place and returns the sorted array.

const numbers = [5, 1, 8, 3];
numbers.sort((a, b) => a - b); 

// reverse()
//  Reverses the order of elements in an array.

const reversedFruits = fruits.reverse();

//-------------------------------------------------->

// Transforming Arrays Method

// map()
// The map() method in JavaScript is used to create a new array by applying a function to each element of an existing array.

const numberss = [1, 2, 3, 4];
const doubledNumberss = numberss.map(number => number * 2);
console.log(doubledNumberss); // Output: [2, 4, 6, 8]   

//  Example 2

const people = [
    { name: "Ali", age: 25 },
    { name: "Bhai", age: 30 },
    { name: "Sam", age: 35 }
  ];
  
  const names = people.map(person => person.name);
  console.log(names); // Output: ["Ali", "Bhai", "Sam"]


//-------------------------------------------------->

// filter() 
// The filter() method in JavaScript is used to create a new array that contains only the elements from the original array that pass a specific test (defined by a callback function). Like map(), filter() does not change the original array—it returns a new one.

// Example want a new array with even numbers

const numberz = [1, 2, 3, 4, 5, 6];
const evenNumberz = numberz.filter(number => number % 2 === 0);
console.log(evenNumberz); // Output: [2, 4, 6]

  
// Example filtering Object in Array

const peoples = [
    { name: "Ali", age: 25 },
    { name: "Bhai", age: 30 },
    { name: "Sam", age: 35 }
  ];
  
  const adults = peoples.filter(person => person.age >= 30);
  console.log(adults); 
  // Output: [{ name: "Bhai", age: 30 }, { name: "Sam", age: 35 }]
  

//----------------------------------------------------------

//Reduce()
//reduce() method is used to accumulate values in an array by applying a function to each element and returning a single output

const numb = [1, 2, 3, 4, 5];


const sum = numb.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); 

