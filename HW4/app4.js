'use strict';

let person = {
    firstName: 'Mariia',
    lastName: 'Pasko',
    city: 'Kharkiv',
    currentAge: 38,
    hobbies: ['hiking', 'travelling', 'driving'],


    introduce() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}. All ${this.currentAge - 1} years of my life before 24.02.2022 I lived in ${this.city}.`);
    },

    changeCity(newCity) {
        this.city = newCity;
        console.log(`Due to the well-known circumstances I've moved to ${this.city}.`)
    },

    describeHobbies: function () {
        console.log(`Some of my hobbies are: ${this.hobbies.join(', ')}.`);
    }
};


let securedSelfIntroduce = person.introduce.bind(me);
let securedSelfChangeCity = person.changeCity.bind(me);
let securedSelfDescribeHobbies = person.describeHobbies.bind(me);

setTimeout(securedSelfIntroduce, 6000);
setTimeout(securedSelfChangeCity, 7000);
setTimeout(securedSelfDescribeHobbies, 8000);