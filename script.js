
// {key:value} - basic object SyntaxError, where key is a string ("property name") and value can be 
// anything.

let user0 = new Object(); // "object constructor" syntax
let user1 = {}; // "object literal" syntax - the most usable way


// Literals and properties 

let user2 = {
    name: "John",
    age: 34
};

console.log(user2.name); // John
console.log(user2.age); // 34

// the value can be of any type :

user2.isAdmin = true; // boolean

// to remove property, we can use the delete operator:

delete user2.age;

console.log(user2); // { name: "John", isAdmin: true }

let user3 = {
gamerTag: "Klo",
age: 21,
"noob af": true, // multiname property's name must be qouted
country: "China", // last property in the list may end with comma for easier add/remove/move 
};


// Square brackets
