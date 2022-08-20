//3.Write a “person” class to hold all the details.

class person{
    constructor(name,id,mark){
        this.name=name;
        this.id=id;
        this.mark=mark;
}
    getPersonDetails() {
        return `The peron name is ${this.name} with id ${this.id} and the mark is ${this.mark}`;
    }}
       const person1 = new person("surya",501,380);
        const person2 = new person("vijay",503,400);
        const person3 = new person("ajith",504,450);

console.log( person1.getPersonDetails());   
console.log( person2.getPersonDetails());   
console.log( person3.getPersonDetails());   