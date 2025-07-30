// It is also a function which behaves like class.
function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make,model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Tesla", "Any");
// console.log(myCar)

let person = new Person("Krishna", 19);
// console.log(person);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe())

// New thing

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());

// if new is not present there

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword.");
    }
    this.name = name;
}

let tea = new Drink("tea");
console.log(tea)
let coffee = Drink("Coffee");