'use strict';

function durationBetweenDates(startDateStr = '01 Jan 1970', endDateStr = '01 Jan 1971', dimension = 'days') {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);


    if (startDate > endDate) {
        [startDate, endDate] = [endDate, startDate];
    }

    const timeDifference = endDate - startDate;

    const conversions = {
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
    };

    const convertedDuration = timeDifference / conversions[dimension];

    const roundedDuration = Math.round(convertedDuration);

    return `${roundedDuration} ${dimension}`;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); 