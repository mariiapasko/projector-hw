'use strict';

function iterativeOddSumTo(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0 && i > 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));

