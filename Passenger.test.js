const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Passenger', () => {
    test('should have a name', () => {
        const testPassenger = new Passenger("Harry")
        expect(testPassenger.name).toBe("Harry")
    });
    test('can have a bag', () => {
        const testBag = new Bag(25)
        const testPassenger = new Passenger("Harry")
        expect(testPassenger.bags.length).toBe(0)
        testPassenger.addBag(testBag)
        expect(Array.isArray(testPassenger.bags)).toBeTruthy()
        expect(testPassenger.bags[0].weight).toBe(25)
    });
});