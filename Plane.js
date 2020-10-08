const Passenger = require('./Passenger')
const Crew = require('./Crew')

class Plane {
    constructor(destination) {
        this.inbound = null
        this.passengers = []
        this.crew = []
        this.destination = destination
    }
    board(people){
        people.map(person => {
            if (person instanceof Passenger){
                this.passengers.push(person)
            } else if (person instanceof Crew){
                this.crew.push(person)
            } else {
                console.log('This person is not on this flight')
            }
        })
    }
}

// const passenger1 = new Passenger("Ron")
// const passenger2 = new Passenger("Harry")
// const crew1 = new Crew("Dobby")
// const crew2 = new Crew("Winky")
// const plane = new Plane("JFK")

// plane.board([passenger1, passenger2, crew1, crew2])

// console.log(plane.passengers)
// console.log(plane.crew)


// const plane1 = new Plane(airport.name) // { destination: JFK }

// NB: plane1 is an INSTANCE of Plane class 

// board(passenger){
//     this.passengers.push(passenger)
// }

module.exports = Plane 