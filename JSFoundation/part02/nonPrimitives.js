// Object
const username = {
    firstname: "Krishna",
    lastname: "Gupta",
    "first name": "hitesh",
    isLoggedin: true,
};

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());

// Array
let anotherUser = ["hitesh", true];
console.log(anotherUser[0])

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));