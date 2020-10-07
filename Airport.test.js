const Airport = require('./Airport');

describe('Airport', () => {
    test('should have a name', () => {
        const airport = new Airport("Heathrow")
        expect(airport.name).toBe("Heathrow")
    });
    test('should have a function to land planes', () => {
        const airport = new Airport("Heathrow")
        airport.land("Singapore")
        expect(airport.planes).toContain("Singapore")
    });
});