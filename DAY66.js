//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return `the radius is ${this.radius}`;
    }
    setRadius(radi){
        this.radius=radi;
    }
    getColor(){
        return `the color is ${this.color}`;
    }
    setColor(favoriteColor){
        this.color=favoriteColor;
    }
    getArea(){
        return `the area is ${Math.PI*this.radius*this.radius}`;
    }
    getCircumference(){
        return `the Circumference is ${2*Math.PI*this.radius}`;
    }
}
const circleValue = new circle(20,"red");
console.log(circleValue.getArea());
console.log(circleValue. getCircumference());
console.log(circleValue. getRadius());
console.log(circleValue. getColor());
circleValue.setRadius(40);
circleValue.setColor("GREEN");
console.log(circleValue.getArea());
console.log(circleValue. getCircumference());
console.log(circleValue. getRadius());
console.log(circleValue. getColor());