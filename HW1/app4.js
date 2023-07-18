'use strict';

const resultsArray = [1, 2, [3, [4]]];

const flattedArray = resultsArray.flat(Infinity);
// console.log(flattedArray);

let productOfArray = 1;
for (let i = 0; i < flattedArray.length; i++) {
    productOfArray *= flattedArray[i];
  } 

  console.log(productOfArray);


