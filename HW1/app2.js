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

const userNamesList = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

function startsFromVowel(name) {
  const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я', 'а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];
  return vowels.includes(name[0]);
}

let filteredNames = userNamesList.filter(startsFromVowel);
console.log(filteredNames.sort());

