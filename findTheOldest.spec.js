const helloWorld = require('./findTheOldest');

describe('helloWorld', () => {
    test('prints Hello World', () => {
    expect(helloWorld("Hello World")).toBe("Hello World");
    })
});