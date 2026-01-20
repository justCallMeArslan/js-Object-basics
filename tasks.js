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



// Tasks from Arrays lesson 

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an 
// array of names.

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let users1 = [john1, pete1, mary1];

let names = [];

function getNames() {
    for (let user of users1) {
        names.push(user.name);
    }
}

getNames();
console.log(names); // John, Pete, Mary

// or 


const names1 = users1.map(user => user.name)
console.log(names1);


// Map to objects 

// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName 
// is generated from name and surname.

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [john2, pete2, mary2];


let usersMapped = users2.map(user => ({ // array.map() can create objects
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));


/*
usersMapped = 
*/

console.log(usersMapped); // [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
console.log(usersMapped[2].id) // 1
console.log(usersMapped[1].fullName) // John Smith



// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and 
// sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users3 = [pete, john, mary];

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);

}

sortByAge(users3);

// now: [john, mary, pete]
console.log(users3[0].name); // John
console.log(users3[1].name); // Mary
console.log(users3[2].name); // Pete


// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns 
// the average age. The formula for the average is (age1 + age2 + ... + ageN) / N.

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr = [john3, pete3, mary3];

function getAverageAge(array) {
    return array.reduce((acc, cur) => acc + cur.age, 0) / array.length;
}

console.log(getAverageAge(arr));



// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array 
// items as values.

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    return arr.reduce((obj, item) => { // obj is accumulator, which is going to be emptu object in our case
        obj[item.id] = item; // use item.id as the key and to store entire item as the value
        return obj;
    }, {}); // {} used as initialValue for accumulator
}

let usersById = groupById(users);

console.log(usersById);



/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.

let products = [
    { id: 'phone', price: 800 },
    { id: 'laptop', price: 1500 },
    { id: 'tablet', price: 600 },
];

function assignById(array) {
    return array.reduce((acc, item) => { // acc is accumulator which will take {} as an initial value
        acc[item.id] = item; // we store an entire item object using item.id
        return acc; // return acc for next iteration
    }, {})
}


let productsById = assignById(products);
console.log(productsById);

let people = [
    { name: 'John', age: 20 },
    { name: 'Ann', age: 20 },
    { name: 'Pete', age: 30 },
];

function groupByAge(array) {
    return array.reduce((acc, item) => {
        if (!acc[item.age]) {  // if there is no array for that item -> create new one
            // item.age
            acc[item.age] = [] // create an array for each item.age
        }
        acc[item.age].push(item); // depending on age value 20 or 30, we push items into arrays
        return acc; // acc goes for next iteration
    }, {})
}

console.log(groupByAge(people));


let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function countQuantity(array) {
    return array.reduce((acc, item) => {
        if (!acc[item]) { // if item hasnt been count yet, initialize its count
            acc[item] = 0;
        }
        acc[item]++; // if item already passed before add 1 to count 
        return acc; // go to next iteration
    }, {}); // object passed as initial value
}

console.log(countQuantity(fruits));


let users5 = [
    { id: 'john', name: 'John Smith', age: 20 },
    { id: 'ann', name: 'Ann Smith', age: 24 },
];


function userShortCard(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
    }, {})
}

console.log(userShortCard(users5));


let expenses = [
    { category: 'food', amount: 50 },
    { category: 'transport', amount: 20 },
    { category: 'food', amount: 30 },
];

function calculateExpense(arr) {
    return arr.reduce((acc, item) => {
        if (!acc[item.category]) { // if item hasnt been counted initialize its count with zero 
            // as a initial
            acc[item.category] = 0;
        }

        acc[item.category] += item.amount; // for each category add its values to get total 
        // amount by category
        return acc;


    }, {})
}

console.log(calculateExpense(expenses));



let expenses1 = [
    { person: 'John', category: 'food', amount: 50 },
    { person: 'John', category: 'transport', amount: 20 },
    { person: 'Ann', category: 'food', amount: 30 },
    { person: 'John', category: 'food', amount: 25 },
    { person: 'Ann', category: 'transport', amount: 10 },
];

// make a person name as a key 
// group their expenses depending of their name
// summarize their expenses separately


function calculateExpenses(arr) {
    return arr.reduce((acc, item) => {
        if (!acc[item.person]) { // if person doesnt exist in accumulator(acc), create an 
        // object for them
            acc[item.person] = {}; 
        }
        if (!acc[item.person][item.category]) { // if category for specific person has not been added yet 
            // make its value equal to zero
            acc[item.person][item.category] = 0; 
        }
        acc[item.person][item.category] += item.amount; // add current amount of each category for 
        // specific person

        return acc; //return acc for next iteration
    }, {})
}

console.log(calculateExpenses(expenses1));
