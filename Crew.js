const Passenger = require('./Passenger')
const Person = require('./Person')

class Crew extends Person {
    crossCheck(crewArray){
        return crewArray.every(crewMember => {
            if (crewMember instanceof Crew){
                return true
            } else {
                return false
            }
        })
    }
}

// const plane = new Plane("Qantas")
// const crew1 = new Crew("Harry")

// plane.board([crew1])

// console.log(plane.crew)

module.exports = Crew