// For Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

  //------------------------------------------------------------

// for arrays

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

  //------------------------------------------------------------

// Reverse a string

console.log(" Here is the reverse counting ");
for (let i = 10; i >= 0; i -= 2) {
   
    console.log(i);
}

  //------------------------------------------------------------

// Break and Continue

console.log("Here we use BREAK and CONTINUE ");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Here is number 5")
        continue;
    }
    if (i === 8) {
        console.log("Yes we find 8");
        
        break; 
    }
    console.log(i);
}


  //------------------------------------------------------------
// For of loop
//The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, and other iterable collections.

const favFruit = ["apple", "banana", "cherry"];
for (const fruit of favFruit) {
  console.log(fruit);
}

// Example with String

const name = "sam";
for (const char of name) {
  console.log(char);
}

  //------------------------------------------------------------


const products = ["Laptop", "Smartphone", "Headphones", "Keyboard"];

for (const product of products) {
  console.log("Product available:", product);
}


  //------------------------------------------------------------


//  For Loop In
// The for...in loop is used to iterate over the enumerable properties of an object. Instead of values, it iterates over the keys (or property names) of the object. It’s commonly used for objects but can also work with arrays, though this is generally discouraged because it iterates over keys rather than values.

let person = {
    name: "Sam",
    age: 30,
    city: "Lahore"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

  //------------------------------------------------------------

// while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;  
}

  //------------------------------------------------------------

// array
let fruit = ["apple", "banana", "cherry"];
let j = 0;

while (j < fruit.length) {
    console.log(fruit[j]);
    j++;
}


  //------------------------------------------------------------

// Break and Continue
let x = 3;

while (x < 10) {
    if (x === 7) {
      
        break;  
    }

    console.log(x);
    x++;
}

  //------------------------------------------------------------

// Do While Loop

let k = 1;

do {
    console.log(k);
    k++;  
} while (k >= 5);


  //------------------------------------------------------------
  
// Break and Continue

let y = 0;

do {
    if (y === 3) {
        y++;
        continue;  // skip the rest of the loop for i == 3
    }

    if (y === 5) {
        break;  // exit the loop when i == 5
    }

    console.log(y);
    i++;
} while (i < 10);

//---------------------- PROBLEMs ----------------------->

// Calculating the Total Price of Items in a Shopping Cart

const cart = [12.99, 23.95, 4.99, 19.99];
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i];
}

console.log("Total Price:", totalPrice);

//---------------------- PROBLEMs ----------------------->

//  User Login Attempts

const correctPassword = "securePassword";
let attempts = 0;
// let userInput;

while (attempts < 3) {
 let userInput = prompt("Enter your password:"); 
  if (userInput === correctPassword) {
    console.log("Login successful!");
    break;
  } else {
    console.log("Incorrect password, try again.");
    attempts++;
  }
}

if (attempts === 3) {
  console.log("Account locked due to too many failed attempts.");
}


//--------------------------------------------------------------->

const numbers = [3, 5, 2, -1, 4, 6];

for (const num of numbers) {
  if (num < 0) {
    console.log("First negative number found:", num);
    break;
  }
}















