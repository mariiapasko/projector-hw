'use strict';

// селектор для елементу з текстом 'Навігація по DOM дереву'
const navigationElement = document.getElementById('headerTwo');
console.log(navigationElement);

// селектор для першого елементу <section>
const firstSection = document.querySelector('section');
console.log(firstSection);

// селектор для елементу списку з текстом 'Пункт 5'
function queryFifthItem() {
    let listItems = document.querySelectorAll('li')
    let resultInArrays = []
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === 'Пункт 5') {
            resultInArrays.push(listItems[i])
            return resultInArrays[0]
        }
    }
}
console.log(queryFifthItem())

// селектор для елементу з класом 'hatredLevelBlock'
const divWithClass = document.getElementsByClassName('hatredLevelBlock');
console.log(divWithClass);

