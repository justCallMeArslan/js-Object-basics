const findeTheOldest = require('./findTheOldest');
const findTheYoungest = require('./findTheOldest');

describe('findTheOldest', () => {
    test('checking who is the oldest of inventors', () => {
        const inventors = [
            { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
            { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
            { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        ];
        expect(findeTheOldest(inventors).first).toBe("Albert");
    });
    test('if missing year, check for youngest', () => {
        const inventors = [
            { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
            { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
            { first: 'Galileo', last: 'Galilei', passed: 1642 },
        ];
        expect(findTheYoungest(inventors).first).toBe("Galileo");
    });


});