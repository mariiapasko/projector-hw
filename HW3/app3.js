'use strict';

function byProperty(property, direction) {
    return function (a, b) {

        const valueA = a[property];
        const valueB = b[property];

        if (direction === '>') {
            if (valueA > valueB) return 1;
            if (valueA < valueB) return -1;
            return 0;
        } else if (direction === '<') {
            if (valueA < valueB) return 1;
            if (valueA > valueB) return -1;
            return 0;
        }
    };
}

Array.prototype.toSorted = function (sortFn) {
    return this.slice().sort(sortFn);
}

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

console.log(movies.toSorted(byProperty('releaseYear', '>')));
console.log(movies.toSorted(byProperty('runningTimeInMinutes', '<')));
console.log(movies.toSorted(byProperty('movieName', '>'))); 