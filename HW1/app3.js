'use strict';

const currentMaxValue = 4589;

let reverseMaxValue = +(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);