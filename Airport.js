const fs = require('fs')
const path = require('path')
const { readFile } = require('fs/promises')

class Airport {
    static all = []

    constructor(name){
        this.name = name
        this.planes = [] 
        this.constructor.all.push(this)
    }
    land(plane){  
            this.planes.push(plane)
        }  
    takeoff(plane){
        console.log(plane)
       console.log(this.constructor.all)
       console.log(this.planes)
    
    //    console.log(plane.destination.planes)

       let findPlane = this.planes.indexOf(plane)

       console.log(findPlane) // 0

       this.planes.splice(findPlane, 1)

       console.log(this.planes) // []
       console.log(this.constructor.all)
       console.log(plane)
        
       let destination = this.constructor.all.find(obj => obj.name === plane.destination)
        destination.land(plane)


       console.log(destination)
       
    }
    // getInfo(callback){ // add "callback" as function if callback async
    //     // Callback 
    //     fs.readFile(('airportsData.json'), (err, data) => {
    //         const allData = JSON.parse(String(data))
    //         const airport = data.find(metaData => metaData.iata === this.name)
    //         callback(err, airport)
    //     })  
    // }
    // getInfo(){
    //      // Promises
    //      return new Promise((resolve, reject) => {
    //         fs.readFile('./airportsData.json', (err, data) => {
    //             if (err) return reject(err)

    //             const allData = JSON.parse(String(data))
    //             const airport = allData.find(metaData => metaData.iata === this.name)
    //             resolve(airport)

    //         })
    //     }) 
    // }
    async getInfo(){
        // Async await 
        const data = await readFile('./airportsData.json')
        const allData = JSON.parse(String(data))
        const airport = allData.find(x => x.iata === this.name)
        console.log(airport)
        return airport 
    }
}

// Must call function to console.log(data)
// const CDG = new Airport("CDG")
// CDG.getInfo()



    //    this.constructor.all[]
    

module.exports = Airport