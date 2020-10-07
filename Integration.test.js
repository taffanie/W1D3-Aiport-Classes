const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Airport = require('./Airport')

describe('Holiday', () => {
    test('airport should have a plane, on the plane are passengers & passenger bag has a weight', () => {
        const testAirport = new Airport("Bali")
        const testPlane = new Plane("Perth")
        const testPassenger = new Passenger("Ron")
        const testBag = new Bag(35)
        testAirport.land(testPlane)
        expect(testAirport.planes[0].destination).toBe("Perth")
        testPlane.board(testPassenger)
        expect(testPlane.passengers[0].name).toBe("Ron")
        testPassenger.addBag(testBag)
        expect(testPassenger.bags[0].weight).toBe(35)
    });
});

// Add two bags to passenger bob 
// const bob = new Passenger('Bob the Builder')
// const bobsCabinBag = new Bag(9)
// const bobsHullBag = new Bag(23)
// bob.addBag(bobsCabinBag)
// bob.addBag(bobsHullBag)
// console.log(bob.bags)

//Aiport with plane with passenger with bag
// const testAirport = new Airport("Bali")
// const testPlane = new Plane("Perth")
// const testPassenger = new Passenger("Ron")
// const testBag = new Bag(35)
// testAirport.land(testPlane)
// testPlane.board(testPassenger)
// testPassenger.addBag(testBag)

// console.log(testAirport.planes)
// console.log(testAirport.name)
// console.log(testPlane.destination)
// console.log(testPlane.passengers)
// console.log(testPassenger.name)
// console.log(testPassenger.bags)