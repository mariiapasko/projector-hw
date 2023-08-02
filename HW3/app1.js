'use strict';

function addThemAll(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum
}
console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));