

// IF (code run if the condition is true)


let age=17;
if (age<=17) {
    console.log("You are not adult");
}

let number = 5;

if (number > 0) {
    console.log("The number is positive.");
}

  //------------------------------------------------------------

// IF ELSE (conditionis true then IF code run otherwise run else code )
let num = -3;

if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

  //------------------------------------------------------------

// ELSE-IF (IF conditon is not true then check ELSE-IF then print else)
let AnOtherNum = 0;

if (AnOtherNum > 0) {
    console.log("The number is positive.");
} else if (AnOtherNum < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

  //------------------------------------------------------------

const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


  //------------------------------------------------------------

// SWITCH SATATEMENT
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Wednesday":
        console.log("It's middle  of week!");
        break;
    case "Friday":
        console.log("The weekend is near!");
        break;
    default:
        console.log("It's a regular day.");
}

  //------------------------------------------------------------
  
let cups=14;
switch (cups) {
    case 10:
        console.log("this is not the matching value")
        break;
    case 11:
        console.log("this is not the matching value")
        break;
    case 13:
        console.log("this is not the matching value")
        break;   

    default:
        console.log("No matching values found");
        
        break;
}


//-------------------------------------------------------->

const color = "blue";

switch (color) {
  case "red":
    console.log("The color is red.");
    break;
  case "blue":
    console.log("The color is blue.");
    break;
  case "green":
    console.log("The color is green.");
    break;
  default:
    console.log("Unknown color.");
}


//-------------------------------------------------------->

// Break in Loop

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; 
  }
  console.log(i);
}

//-------------------------------------------------------->

// Continue in Loop

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; 
  }
  console.log(i);
}



//-------------------------------------------------------->

// Falsy Values

// false , 0 (and -0) , "" (empty string) ,  null , undefined, NaN (Not-a-Number)

// Truthy value

// Anything else falsy value are truthy value.

// Example

let name = "Ali";

if (name) {
  console.log("Name is truthy, so it exists."); 
}

// Example


if ("hello") {
    console.log("This is truthy!");  
  }
  
  if (42) {
    console.log("Numbers other than 0 are truthy!");  
  }
  
  if ({}) {
    console.log("Empty objects are truthy!");  
  }
  
  if ([]) {
    console.log("Empty arrays are truthy!");  
  }
  
  if (function() {}) {
    console.log("Functions are truthy!"); 
  }
 
  





