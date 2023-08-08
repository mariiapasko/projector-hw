'use strict';

function multiplication(a, b) {
    return a * b;
}

function slower(func, seconds) {
    return function (...args) {
        console.log(`Chill out, you will get you result in ${seconds} seconds`);

        setTimeout(() => {
            const result = func(...args);
            console.log(`The result is ${result}`);
        }, seconds * 1000);
    };
}

let slowedMultiplication = slower(multiplication, 8);
slowedMultiplication(3, 9);