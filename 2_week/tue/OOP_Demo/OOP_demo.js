// OOP Demo
// [0,1,2,3,4,5]
let person = {
    firstName: 'Michael',
    lastName: 'Scott',
    age: 34,
};
// console.log(person.firstName);
// console.log(person['firstName']);
let meal = {
    appetizer: 'cheese sticks',
    entree: 'chicken parm',
    dessert: 'ice cream',
    drink: 'Coke',
};
let { dessert } = meal;
// console.log(dessert);
let { entree, appetizer } = meal;
// console.log(entree);
// console.log(appetizer);
const { drink: sweetness } = meal;
// const sweetness = meal.drink;
// console.log(meal.drink);
// console.log(sweetness);
const { appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink } = meal;
// console.log(myAppetizer);
// console.log(myEntree);
// console.log(myDrink);
// console.log(myDessert);
for (let objectKey in person) {
    // console.log(`${objectKey} : ${person[objectKey]}`);
}
person.job = 'Web Developer';
person.pets = ['chicken', 'duck', 'hamster'];
// console.log(person);
person.pets.push('Dog');
// console.log(person.pets[1]);
let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj', 'vinson'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo'],
};
// console.log(teams);
delete teams.teamFour;
// console.log(teams);

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }
    drive(milesToDrive){
        this.miles += milesToDrive;
    }
}
class Sedan extends Car{
    constructor(make, model, year, color, type){
        super(make, model, year, color)
        this.type = type;
        this.passengerCount = 5;
    }
}
let vinsonsCar = new Sedan('Tesla', 'model 3', 2025, 'Matte Black', 'Electric');
vinsonsCar.drive(100)
console.log(vinsonsCar);
let chasesCar  = new Car('Pontiac', 'GrandPrix', 1998, 'red');
let ashleysCar = new Car('Music', 'mp3', 2001, 'blue')
console.log(chasesCar);
console.log(ashleysCar);
chasesCar.drive(50)
console.log(chasesCar);