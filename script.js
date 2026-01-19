
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

// So most of the time, when property names are known and simple, the dot is used. And if we need 
// something more complex, then we switch to square brackets.



// Property value shorthand
// variables are frequently used as values for property names:

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user5 = makeUser("Tobi", 16);

console.log(user5); // { name: 'Tobi', age: 16 }
console.log(user5.name); // Tobi

// the use-case of making a property from a variable is so common, that there’s a special property 
// value shorthand to make it shorter.
// instead of name:name , we can use just name, :

function makeUser(name, age) {
    return {
        name,
        age,
    };
}

let user6 = makeUser("Kody", 20);

console.log(user6); // { name: 'Kody', age: 20 }
console.log(user6.name); // Kody

// both can be used simulaneously

// let user = {
// name, 
// age: 30
// };



// Property existence test, "in" operator

// a notable feature of objects in JS that its possible to access any property.
// there will be no error if the property doesnt exist (non-existing properties return undefined).

let userInput = {};

console.log(userInput.noSuchProperty === undefined); // true, means "no such property"

// there is also special operator "in" for that

// "key" in object - basic syntax 

let userLogin = { age: 30 };

let property = "age";
console.log(property in userLogin); // true, means property exists in userLogin object



// The "for..in" loop

// for (key in object) { // - basic syntax
//     // executes the body for each key among object properties
// }


let user7 = {
    name: "Tod",
    age: 38,
    isAdmin: true
};

for (let key in user7){ // key and prop is common use
    console.log(key); // name, age, isAdmin
    console.log(user7[key]); // "Tod", 38, true
}


// ordered like an object

// are objects stored in order? shortly : "in special fashion";

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ....
    "1": "USA",
};

for (let code in codes) {
    console.log(code);// 1, 41, 44, 49
    
}

// The phone codes go in the ascending sorted order, because they are integers. 
// So we see 1, 41, 44, 49.
// The “integer property” term here means a string that can be converted to-and-from an integer 
// without a change. So, "49" is integer property name, because when it transformed to and from 
// string, it will remain the same. 
// "+49" and  "1.2", e.g are not integer properties.

console.log(String(Math.trunc(Number("49")))); // returns 49, same 
console.log(String(Math.trunc(Number("+49")))); // returns 49, not same with +49
console.log(String(Math.trunc(Number("1.2")))); // returns 1, not same with 1.2


// on other hand, if key properties are non-integers, then they listed in the creation order:

let user8 = {
    name: "Tom",
    surname: "Stone"
};
user8.age = 25; // adding one more property

for (let key in user8){
    console.log(key); // name, surname, age
    
}
console.log(user8); // { name: 'Tom', surname: 'Stone', age: 25 }
