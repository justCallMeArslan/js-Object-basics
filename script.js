
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


// user3.likes birds = true; - will return syntax error, as birds in that case is unexpected value.
// There is an alernative "square bracket notation" that works with any string:

let user4 = {};

user4["likes birds"] = true;
console.log(user4);
delete user4["likes birds"];
console.log(user4);

let key = "likes birds";
user4[key] = true; // - same as user4["likes birds"] = true;
console.log(user4);

let favQuote = "What is your favorite quote?"; // should be a promt, but noisy
let quote = "quote";

user4.quote = favQuote; // doesnt return anything, undefined
user4[quote] = favQuote; // creates key and adds value to that key , returns {quote: favQuote}
console.log(user4);

// computed properties - can be used in an object as a key :

let fruit = "apple";
// prompt ("You the most loved fruuit", "Choose any"); // apple

let array = ["apple", "cucmuber", "banana"];
let bag = {
    [fruit]: 5, //the name of the key propery taken from the variable fruit
    [array]: 10,
};

bag[array]; // array also can become a key property for the object

console.log(bag); // { apple:5, apple,cucumber, banana: 10};

// can be used in more complex way:

let cars =  "BMW";
let dealerShop = {
    [cars + " is super modern car. Guarantee for "]:100 + " %" // 
};

console.log(dealerShop);










