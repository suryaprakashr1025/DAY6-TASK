//4.write a class to calculate the uber price.
class uber{
    constructor(distance,waitingPeriod,rate){
        this.distance=distance;
        this.waitingPeriod=waitingPeriod;
        this.rate=rate;
    }
    setDistance(dist){
        this.distance=dist;
    }
    setWaitingCharge(wait){
        this.waitingPeriod=wait;
    }
    setRate(price){
        this.rate=price;
    }
    getUber(){
        return (this.distance*this.rate)+(this.waitingPeriod*5);
    }
}

const totalAmount = new uber(10,5,5);
console.log(totalAmount.getUber());
totalAmount.setDistance(20);
totalAmount.setDistance(10);
totalAmount.setDistance(40);
console.log(totalAmount.getUber());