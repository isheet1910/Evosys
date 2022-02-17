function addition(n1, n2) {
    return n1 + n2;
}

function substraction(n1, n2) {
    return n1 - n2;
}

let result = addition(10, 20);
console.log("addition(10,20)= " + result);
result = substraction(10, 20);
console.log("substraction(10,20)= " + result);
const mymodule = require('./add');
console.log("mymodule(10,20)=" + mymodule(10, 20));

// Module with multiple functions
const calc = require('./calc');

let result = calc.add(10, 20);
console.log("addition(10,20)= " + result);

result = calc.sub(10, 20);
console.log("substraction(10,20)= " + result);

result = calc.mul(10, 20);
console.log("multiply(10,20)= " + result);

result = calc.div(10, 20);
console.log("devide(10,20)= " + result);
//===================================================
//calc.js
function addition(n1, n2) {
    return n1 + n2;
}

function substraction(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function devide(n1, n2) {
    return n1 / n2;
}

module.exports.add = addition;
module.exports.sub = substraction;
module.exports.mul = multiply;
module.exports.div = devide;
//====================================
//add.js
// Module with single function
const mymodule = require('./add');
console.log("mymodule(10,20)=" + mymodule(10, 20));

// Module with multiple functions
const calc = require('./calc');

let result = calc.add(10, 20);
console.log("addition(10,20)= " + result);

result = calc.sub(10, 20);
console.log("substraction(10,20)= " + result);

result = calc.mul(10, 20);
console.log("multiply(10,20)= " + result);

result = calc.div(10, 20);
console.log("devide(10,20)= " + result);