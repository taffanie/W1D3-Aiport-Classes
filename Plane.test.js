const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Plane', () => {
    test('should have a boarding function', () => {
        const testPlane = new Plane("JFK")
        const testPassenger = new Passenger("Harry")
        testPlane.board([testPassenger])
        expect(testPlane.passengers[0].name).toBe("Harry")
    });
});