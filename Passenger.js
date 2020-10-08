const Person = require('./Person')

class Passenger extends Person {
    callAttendant() {
        console.log("Hi!")
    }
}

module.exports = Passenger