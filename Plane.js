class Plane {
    constructor(destination) {
        this.passengers = []
        this.destination = destination
    }
    board(passenger){
        this.passengers.push(passenger)
    }
}

// const plane1 = new Plane(airport.name) // { destination: JFK }

// NB: plane1 is an INSTANCE of Plane class 

module.exports = Plane 