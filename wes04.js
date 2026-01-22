// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filteredInventors = inventors.filter(age => (age.year >= 1500
    && age.year < 1600));

console.table(filteredInventors);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const arrayOfInvestors = inventors.map(inventor => {
    return `${inventor.first} ${inventor.last}`;
})

console.log(arrayOfInvestors);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.table(sortedInventors);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const cummulativeLifespan = inventors.reduce((acc, item) => {
    return acc + (item.passed - item.year);
}, 0)

console.log(cummulativeLifespan);


// 5. Sort the inventors by years lived

function sortByYearsLived() {
    return inventors.sort((a, b) => {
        const itemA = a.passed - a.year
        const itemB = b.passed - b.year;
        return itemA - itemB;
    });

}
console.log(sortByYearsLived());



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const container = document.querySelector(".mw-category");
// const links = [...container.querySelectorAll("a")]; // [... ] creates array from whats inside
// const names = links.map(link => link.textContent);
// const deList = names.filter(name => name.includes("de"));


// 7. sort Exercise
// Sort the people alphabetically by last name

const peopleSorted = people.sort((lastChecked, nextChecked) => {
    const [aLast, aFirst] = lastChecked.split(", "); // aFirst, bFirst left for readability
    const [bLast, bFirst] = nextChecked.split(", "); // using only aLast and bLast because we want 
    // to sort by family name only
    return aLast.localeCompare(bLast); // used to compare strings, cause " - " doesnt work for 
    // alphabetical comparison
})

console.table(peopleSorted);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data1 = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const vehicles = data1.reduce((acc, item) => { 
    if (!acc[item]) { // if item never been checked, initialize it with zero as start point for count
        acc[item] = 0;
    }
    acc[item]++; // add 1 to total count when with each iteration
    return acc; // proceed to next iteration
}, {})

console.log(vehicles);
