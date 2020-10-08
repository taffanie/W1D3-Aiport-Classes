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
    // test('airports should have a city', (done) => {
    //     // Test for callbacks 
    //     const CDG = new Airport("CDG")
    //     CDG.getInfo((err, info) => {
    //         console.log(info)
    //         expect(err).toBeNull()
    //         expect(info.country).toEqual('FR')
    //         done() // need "done" function to test async in jest
    //     })
    // });
    // test('airports should have a city', () => {
    //     // Test for promises 
    //     const CDG = new Airport("CDG")
    //     return CDG.getInfo()
    //         .then(info => {
    //             expect(info.city).toEqual("Paris")
    //         })
    //         .catch(err => {
    //             expect(err).toBeNull()
    //         })
    // });
    test('can get information like the city from the airport instance', async () => {
        const CDG = new Airport("CDG")
        const airport = await CDG.getInfo()
        expect(airport.city).toEqual("Paris")
    });
});


