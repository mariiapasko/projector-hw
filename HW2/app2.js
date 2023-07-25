'use strict';

function optimizer(data) {
    const updatedData = {};

    for (const key in data) {
        const lowerCaseKey = key.toLowerCase();
        const value = data[key];
        const roundedValue = parseFloat(value).toFixed(2);
        updatedData[lowerCaseKey] = roundedValue;
    }

    return updatedData;
}

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);
