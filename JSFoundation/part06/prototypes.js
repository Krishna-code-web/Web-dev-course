// Prototypes is object that contains properties and methods
// that associates with the object when it is created.

let computer = {
    cpu: 12
};

let lenovo = {
    screen: "HD",
    __proto__: computer,
};
console.log(`lenovo `, lenovo.__proto__);

let genericCar = {
    tyres : 4,
};

let tesla = {
    driver: "AI",
};

// Methods of Object (*class)
Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla `, Object.getPrototypeOf(tesla));