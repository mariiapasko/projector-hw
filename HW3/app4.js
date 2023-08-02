'use strict';

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    const uniqueSet = new Set(array);

    return Array.from(uniqueSet);

}

console.log(filterUnique(userNames));

