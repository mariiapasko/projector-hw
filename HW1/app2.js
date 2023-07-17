"use strict";

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

//Conditional construction

const filteredNamesConditional = [];

for (let i = 0; i < userNames.length; i++) {

    const firstLetter = userNames[i][0].toLowerCase();
    if (firstLetter === 'а' || firstLetter === 'є' || firstLetter === 'е' || firstLetter === 'и' || firstLetter === 'і' || firstLetter === 'ї' ||  firstLetter === 'о' || firstLetter === 'у' || firstLetter === 'ю' || firstLetter === 'я') {

      filteredNamesConditional.push(userNames[i]);  
    }
    }

console.log(filteredNamesConditional);

//Built-in array method

const userNamesBuildin = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];


