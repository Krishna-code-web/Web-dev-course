function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    };
};

// Remembers the variable.
let increment = outer();
console.log(increment())
console.log(increment())
console.log(increment())
