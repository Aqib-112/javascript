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



// Transforming Arrays Method

// map()
// Creates a new array with the results of applying a function to every element

const lengths = fruits.map(fruit => fruit.length); 
 
