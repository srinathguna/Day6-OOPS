//write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, durationInMinutes) {
        const distanceCost = distanceInKilometers * this.costPerKilometer;
        const durationCost = durationInMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + durationCost;
        return totalCost;
    }
}

const priceCalculator = new UberPriceCalculator(5, 2, 0.5); // Creating an instance of UberPriceCalculator

const distance = 10; // Distance in kilometers
const duration = 20; // Duration in minutes

const totalPrice = priceCalculator.calculatePrice(distance, duration); // Calculate the total price
console.log("Total Price:", totalPrice); 
