function calculator(number1, number2, action) {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };
}
calculator(4, 5, "+")
console.log();



let calculator1 = (number1, number2, action) => {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };   
};
// honisting
console.log(calculator1(1,2,"*"))
sayHello();



function sayHello() {
    console.log("Hello, World!");

    sayHello();

function sayHello() {
    console.log("Hello, World!");
};

console.log(x); // ? undefined
var x = 5;
console.log(x); // ? 5

sayHi(); // ? result
var sayHi = function() {
    console.log("Hi here!");
}

console.log(y); // ? undefined <=error
let y = 10;
}



let calculator2 = function(number1, number2, action) {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };   
}




