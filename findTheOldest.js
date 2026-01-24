
const randomDateOfBirth = Math.floor(Math.random() * (200 - 150) + 1600);

const findTheOldest = function (array) {
    return array.reduce((first, next) => {
        const lifeTimeFirst = first.passed - first.year;
        const lifeTimeNext = next.passed - next.year;

        return lifeTimeNext > lifeTimeFirst ? next : first;
        
    });
}


const findTheYoungest = function(array){
    return array.reduce((youngest, current) => {

        const youngestYear = youngest.year ?? randomDateOfBirth;
        const currentYear = current.year ?? randomDateOfBirth;

        const youngestInvAge = youngest.passed - youngestYear;
        const currentInvAge = current.passed - currentYear;

        return currentInvAge < youngestInvAge ? current : youngest;
        
    })
}


// console.log(findTheOldest(inventors));
// console.log(findTheYoungest(inventors));


//  console.log(Math.floor(Math.random() * (200 - 180)) + 1600);




module.exports = findTheOldest;
module.exports = findTheYoungest;