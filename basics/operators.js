// Operators

// Arithmatic Operators

let x=10
let y=5

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//---------------------------------------------------->

// Assignment Operators

//    =    Assign	x = 5
//    +=   Add and assign	x += 5 (same as x = x + 5)
//    -=   Subtract and assign	x -= 5 (same as x = x - 5)
//    *=   Multiply and assign	x *= 5
//    /=   Divide and assign	x /= 5
//    %=	 Modulus and assign	x %= 5


//--------------------------------------------------->

// Comparison Operators

let a = 18;
//    ==	Equal to	

console.log(a == "18"); 

//    ===	   Strict equal (type & value)	

console.log(a === "18"); 

//    !=	   Not equal	

console.log(a !="18");

//    !==	   Strict not equal	

console.log(a!="18");

//    >	     Greater than	

console.log(a >10);

//    <	     Less than	

console.log(a <10);

//    >=	   Greater than or equal	

console.log(a >= 18);

//    <=	   Less than or equal	

console.log(a <= 18);


//---------------------------------------------------->

//  Logical Operators

// &&	 AND	(if both values are true then output will true)

let isAdult = true;
let hasID = true;
console.log(isAdult && hasID); 

// || OR (if one value is true then output will true)

let IsLoggedIn = true;
let hasCNIC = false;
console.log(isAdult || hasID); 

// NOT  ! (make the given value opposite i.e true -> flase)

let name =true;
console.log(!name); 


//------------------------------------------------------->

// Spread Operator (...)

// Used to expand arrays, objects, or function arguments.
let arr = [1, 2, 3];
let arr2 = [ 4, 5];
console.log(...arr,...arr2); 

//-------------------------------------------------------->

// Rest Operator

// The rest operator ... collects multiple elements into a single array or object. It's mainly used in function parameters to capture a variable number of arguments or to collect the "rest" of an array/object's elements.

const user = { id: 1, names: "Ali", age: 25, job: "Developer" };
const { names, ...otherDetails } = user;
console.log(names);         // Output: "Ali"
console.log(otherDetails); // Output: { id: 1, age: 25, job: "Developer" }


