// Hello, object
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);


// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


function isEmpty(obj) {
    for (let key in obj) { // if there is any key existed return false
        return false; // no key in empty object , so we never get false 
    }
    return true; // true returns as object is empty 
}

let obj = {};

console.log(isEmpty(obj));



// Sum object properties
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example 
// above. If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = Object.values(salaries).reduce((a, b) => a + b, 0); // turn into array and sums up

console.log(sum);


// or


let sum1 = 0;
for (value in salaries) {  // loops through each number and sums them all later with +=
    sum1 += salaries[value]; // takes values of objects
}

console.log(sum1);



// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object 
// in-place.
// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2; // if needed to change initial obj/array *= or += should be used.
        } 
    }
}

multiplyNumeric(menu);

console.log(menu);


