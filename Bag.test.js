const Bag = require("./Bag")

describe('Bag', () => {
    test('should have a weight', () => {
        testBag = new Bag(25)
        expect(testBag.weight).toBe(25)
    });
    test('must have a weight', () => {
        expect(() => new Bag()).toThrowError("")
    });
});