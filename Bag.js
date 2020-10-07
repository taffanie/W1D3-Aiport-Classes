class Bag {
    constructor(weight){
        if (!weight) throw new Error('bag must have a weight')
        this.weight = weight
    }
}

const bag1 = new Bag(16)

// console.log(bag1.weight) 

module.exports = Bag 