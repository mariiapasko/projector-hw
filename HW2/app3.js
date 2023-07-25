'use strict';

function recursiveOddSumTo(number) {

    if (number <= 0) {
        return 0;

    } else if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    } else {
        return number + recursiveOddSumTo(number - 1);
    }

};

console.log(recursiveOddSumTo(0));
console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));