// Objects
// An object is a data structure used to store collections of data and more complex entities. Objects allow you to store data in key-value pairs, where each key (also called a property or attribute) is associated with a specific value.

// Syntax 
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};

// Example 

let person = {
    name: "Ali",
    age: 25,
    isStudent: true
};
console.log(person);

//-------------------------------------------------------->

// Accessing Individual element 

console.log(person.name); 
console.log(person.age);  

//-------------------------------------------------------->

// Modifying Object Properties

person.age = 30;            
person.city = "Lahore";   
console.log(person);

//---------------------------------------------------------->

// Deleting Properties

delete person.isStudent;
console.log(person);

//--------------------------------------------------------->

// Checking Existance 

// by in operator

console.log("age" in person); 
console.log("gender" in person);

// by hasownproperty()

console.log(person.hasOwnProperty("name")); 
console.log(person.hasOwnProperty("city")); 

//------------------------------------------------------------>

//Using Loop in 

for (let key in person) {
    console.log(key + ": " + person[key]);
}


//------------------------------------------------------------>

// Using Object Methods

// Object.keys()
// Returns an array of a given object’s property names.

console.log(Object.keys(person)); 

// Object.values()
//Returns an array of the property values.

console.log(Object.values(person));

// Object.entries()
// Returns an array of key-value pairs.

console.log(Object.entries(person));

//---------------------------------------------------------------->

// Example 

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    drive: function() {
      console.log("Driving a " + this.brand);
    }
  };
  
  // Manipulating the object
  car.color = "red";          // Add new property
  car.year = 2021;            // Update property
  delete car.model;           // Delete property
  
  // Access and invoke method
  console.log(car.brand);     // "Toyota"
  car.drive();                // "Driving a Toyota"

  
  // Example

  let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      return b !== 0 ? a / b : "Cannot divide by zero";
    }
  };
  
  console.log(calculator.add(5, 3));       // Output: 8
  console.log(calculator.divide(10, 2));   // Output: 5
  console.log(calculator.divide(10, 0));   // Output: "Cannot divide by zero"
  
//--------------------------------------------------------------->

  // Nested Objects


  let company = {
    name: "Invex Tech",
    employees: {
      manager: { name: "Mohsan", age: 30 },
      developer: { name: "Aqib", age: 22 },
      designer: { name: "Ali", age: 23 }
    },
    location: "Okara"
  };
  
  // Accessing nested properties
  console.log(company.employees.manager.name); 
  
  // Modifying nested properties
  company.employees.developer.age = 23;
  console.log(company.employees.developer.age); 
  
  // Adding new nested properties
  company.employees.intern = { name: "Hammad", age: 22 };
  console.log(company.employees.intern.name);   
  
//----------------------------------------------------------->

  // Merge / Combine Object
  let defaults = { theme: "light", fontSize: "medium" };
let userSettings = { fontSize: "large", showNotifications: true };
let combinedSettings = { ...defaults, ...userSettings };

console.log(combinedSettings);
// Output: { theme: "light", fontSize: "large", showNotifications: true }

// --------------------------------------------------------------->

// object.freeze()
// Object.freeze() is used to make an object immutable (non-editable)  

// object.seal()
// Object.seal() is used to prevent adding or removing properties (but still allow changes to existing ones).

let book = { title: "Immutable Book", pages: 150 };

// Freezing the object
Object.freeze(book);
book.pages = 200;            
book.newProp = "test";     
console.log(book);           

let car = { brand: "Honda", model: "Civic" };
Object.seal(car);
car.model = "Gli";        
delete car.brand;            
console.log(car);            
