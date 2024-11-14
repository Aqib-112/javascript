// variables are used to store data values..
// var
// let
// const

// 1- var

var name= "Aqib";
console.log(name);

// we can reassign the values

name="sam";
console.log(name);

// 2- let

let age=15;
console.log(age);
// we can reassign the values
age=20;
console.log(age);



// 3- const

const UserId= "aqib123"
console.log(UserId);

// we cannot reassign values in const

// UserId= "sam123";
// console.log(UserId); //give error


//---------------------- PROBLEMs ----------------------->

var country = "PAKISTAN";
let population = 330000000;
const city = "ISLAMABAD";

console.log(country);     
console.log(population);  
console.log(city);   

population = 881000000;   
console.log(population);  

//---------------------- PROBLEMs ----------------------->

let score = 100;
console.log(score); 

score = 150; 
console.log(score); 

const maxScore = 200;
console.log(maxScore); 

// maxScore = 250; // Error



//---------------------- PROBLEMs ----------------------->

console.log(a); // Output: undefined 
var a = 5;

console.log(b); // Error! Cannot access 'b' before initialization
let b = 10;

console.log(c); // Error! Cannot access 'c' before initialization
const c = 15;




//---------------------- PROBLEMs ----------------------->

const items = ["apple", "banana"];
items.push("orange"); 
console.log(items); 

items = ["new array"]; 

// const prevents reassignment of the variable itself but not modification of objects or arrays that it references.use spread methods that return a new array or object rather than modifying the existing one.

const item = ["apple", "banana"];
const newItems = [...item, "orange"]; 
console.log(newItems); 

//---------------------- PROBLEMs ----------------------->

// Variables declared with let and const are hoisted to the top of their scope but are in a temporal dead zone from the start of the block until the declaration is encountered.

console.log(value); 
let value = 10;

// Always declare variables at the beginning of their scope to avoid the temporal dead zone.

let values = 10;
console.log(values); 


//---------------------- PROBLEMs ----------------------->

let num = "5";
let total = num + 10;
console.log(total); 

// convert into number 1st

let newnum = "5";
let newtotal = Number(newnum) + 10;
console.log(newtotal);

