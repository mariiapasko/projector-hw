"use strict";

const userFullNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = [];

for (let i = 0; i < userFullNames.length; i++) {

    const nameParts = userFullNames[i].split(" ");
    // console.log(namesParts);
    let nameInitials = "";

    for (let j = 0; j < nameParts.length; j++) {

        nameInitials += nameParts[j][0].toUpperCase() + ".";
    }

    initials.push(nameInitials);

}
initials.sort();

console.log(initials);

