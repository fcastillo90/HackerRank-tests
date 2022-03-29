class ParkingLot {
    parking = [];
    constructor(slots){
        this.slots = slots // length
        for(let i= 0; i < slots; i++){ // create the parking
            this.parking.push({slot: i, carId: null}) // add empty slots
        }
    }
    park(carId){
        const park = this.parking.find(value => value.carId === null) // find the first empty slot
        if (park) {
            this.parking[park.slot].carId = carId // park the car
            return true
        }
        return false
    }
    getSlots(){
        return this.parking.map(value => value.carId) // return the carIds
    }
    remove(carId){
        if (this.parking.some((value) => value.carId === carId)) { // check if the carId is in the parking
            const {slot} = this.parking.find(value => value.carId === carId) // find the slot of the car
            this.parking[slot].carId = null // remove the car
            return true
        }
        return false
    }
}
