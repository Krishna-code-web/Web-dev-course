// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance)
console.log(anotherBalance.valueOf())

console.log(typeof balance)
console.log(typeof anotherBalance)

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstName = null
let lastName = undefined
console.log(firstName)
console.log(lastName)

// String

let myString = "hello";
let myStringOne = "Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet)

let greetMessage = `Hello ${username}!`
let demoOne = `Demo is ${2*2}`
console.log(demoOne)

// Symbol
let sm1 = Symbol("abc")
let sm2 = Symbol("abc")

console.log(sm1==sm2)
