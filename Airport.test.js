const Airport = require('./Airport');
const Plane = require('./Plane');

describe('Airport', () => {
    test('all airport instances should be in static array', () => {
        const LHR = new Airport("LHR")
        const LAX = new Airport("LAX")
        expect(Airport.all.length).toBe(2)
    });
    test('planes can fly between airports', () => {
        const JFK = new Airport('JFK')
        const TEX = new Airport('TEX')
        const plane = new Plane('TEX')
        JFK.land(plane)
        JFK.takeoff(plane, plane.destination)
        expect(JFK.planes.length).toBe(0)
        expect(TEX.planes.length).toBe(1)
    });
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


