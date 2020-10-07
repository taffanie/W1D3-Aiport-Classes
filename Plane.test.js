const Plane = require('./Plane')

describe('Plane', () => {
    test('should have a boarding function', () => {
        const testPlane = new Plane("JFK")
        testPlane.board("Harry")
        expect(testPlane.passengers).toContain("Harry")
    });
});