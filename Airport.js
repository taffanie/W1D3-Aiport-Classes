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
}

    //     

    //    this.constructor.all[]
    

module.exports = Airport