'use strict';

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));