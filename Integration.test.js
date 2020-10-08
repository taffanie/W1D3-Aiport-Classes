const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Crew = require('./Crew')
const Plane = require('./Plane')
const Airport = require('./Airport')

describe('Holiday', () => {
    const airport = new Airport("Bali")
    const plane = new Plane("Perth")
    const passenger = new Passenger("Ron")
    const passenger2 = new Passenger("Harry")
    const crew = new Crew("Dobby")
    const crew2 = new Crew("Winky")
    const crew3 = new Crew("Hokey")
    const bag = new Bag(35)

    // ----- TESTS -----

    test('airport should have a plane, on the plane are passengers & passenger bag has a weight', () => {
        airport.land(plane)
        expect(airport.planes[0].destination).toBe("Perth")
        plane.board([passenger])
        expect(plane.passengers[0].name).toBe("Ron")
        passenger.addBag(bag)
        expect(passenger.bags[0].weight).toBe(35)
    });

    test('board function should iterate over array and put crew and passengers in correct property in the plane instance', () => {
        plane.board([passenger2, crew, crew2])
        expect(plane.passengers[0].name).toBe("Ron")
        console.log(plane.passengers)
        expect(plane.passengers[1].name).toBe("Harry")
        expect(plane.crew[0].name).toBe("Dobby")
        expect(plane.crew[1].name).toBe("Winky")
    });

    test('crew members can cross check each other', () => {
        expect(crew2.crossCheck([crew])).toBeTruthy()
    });

    test('all crew members are an instance of Crew class', () => {
        expect(crew2.crossCheck([crew, crew2, crew3])).toBeTruthy()
        expect(crew2.crossCheck([crew2, crew3, passenger])).toBeFalsy()
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
// const airport = new Airport("Bali")
// const plane = new Plane("Perth")
// const passenger = new Passenger("Ron")
// const bag = new Bag(35)
// airport.land(plane)
// plane.board(passenger)
// passenger.addBag(bag)

// console.log(airport.planes)
// console.log(airport.name)
// console.log(plane.destination)
// console.log(plane.passengers)
// console.log(passenger.name)
// console.log(passenger.bags)