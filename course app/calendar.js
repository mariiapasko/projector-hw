'use strict';


export function calendar() {
    const form = document.querySelector('#tab1-content form');
    const startDateInput = document.querySelector('#start-date');
    const endDateInput = document.querySelector('#end-date');
    const btn = document.querySelectorAll('.btn');
    const resultList = document.querySelector('.list-result');
    let dateDistanceMilliseconds = null;
    let result = null;


    

    // adding listeners to the start and end dates
    startDateInput.addEventListener('change', () => {
        if (startDateInput.value === '') {
            return endDateInput.setAttribute('disabled', 'disabled');
        }
        if (new Date(startDateInput.value) > new Date(endDateInput.value)) {
            return endDateInput.value = '';
        }
        endDateInput.removeAttribute('disabled');
        endDateInput.setAttribute('min', startDateInput.value);
        dateDistance();
    });

    endDateInput.addEventListener('change', () => {
        dateDistance();
        addDays.value = 0;
        removeBtnActive();

    });

    function removeBtnActive() {
        btn.forEach(item => item.classList.remove('active'));
    }

    function addBtnActive(btn) {
        btn.parentElement.querySelectorAll('.btn').forEach(item => item.classList.remove('active'))
        btn.classList.add('active');
    }

    function dateDistance() {
        const dayMilliseconds = 1000 * 60 * 60 * 24;
        dateDistanceMilliseconds = new Date(endDateInput.value) - new Date(startDateInput.value);
        result = Math.floor(dateDistanceMilliseconds / (dayMilliseconds));
    }

    //creating week and month presets functionality
    function addDays(val) {
        const formatDate = (date) => date.toISOString().split('T')[0];
        const currentDate = new Date(startDateInput.value);
        switch (val) {
            case 'week':
                currentDate.setDate(currentDate.getDate() + 7);
                endDateInput.value = formatDate(currentDate);
                dateDistance();
                break;
            case 'month':
                currentDate.setMonth(currentDate.getMonth() + 1);
                endDateInput.value = formatDate(currentDate);
                dateDistance();
                break;
        }
    }

    //counting weekdays and weekends
    const countWeekdays = (startDate, endDate) => {
        return Array.from({ length: (endDate - startDate) / (1000 * 3600 * 24) })
            .reduce((count) => {
                if (startDate.getDay() % 6 !== 0) {
                    count++;
                }
                startDate.setDate(startDate.getDate() + 1);
                return count;
            }, 0);
    }

    const countWeekends = (startDate, endDate) => {
        return Array.from({ length: Math.floor((endDate - startDate) / (1000 * 3600 * 24)) })
            .reduce((count) => {
                if (startDate.getDay() % 6 === 0) count++;
                startDate.setDate(startDate.getDate() + 1);
                return count;
            }, 0);
    };

    form.addEventListener('click', handleButtonClick);
    function handleButtonClick(e) {
        addBtnActive(e.target);

        switch (e.target.value) {
            case 'week':
            case 'month':
                addDays(e.target.value);
                break;

            case 'all':
                result = calculateDateDifferenceInDays();
                break;

            case 'weekdays':
                result = countWeekdaysBetweenDates();
                break;

            case 'weekend':
                result = countWeekendsBetweenDates();
                break;

            case 'days':
                result = calculateDateDifferenceInDays();
                break;

            case 'hours':
                result = calculateDateDifferenceInHours();
                break;

            case 'minutes':
                result = calculateDateDifferenceInMinutes();
                break;

            case 'seconds':
                result = calculateDateDifferenceInSeconds();
                break;
        }
    }

    function calculateDateDifferenceInDays() {
        return Math.floor(dateDistanceMilliseconds / (1000 * 60 * 60 * 24));
    }
    function calculateDateDifferenceInHours() {
        return Math.floor(dateDistanceMilliseconds / (1000 * 60 * 60));
    }
    function calculateDateDifferenceInMinutes() {
        return Math.floor(dateDistanceMilliseconds / (1000 * 60));
    }
    function calculateDateDifferenceInSeconds() {
        return Math.floor(dateDistanceMilliseconds / 1000);
    }
    function countWeekdaysBetweenDates() {
        return countWeekdays(new Date(startDateInput.value), new Date(endDateInput.value));
    }
    function countWeekendsBetweenDates() {
        return countWeekends(new Date(startDateInput.value), new Date(endDateInput.value));
    }


    //LocalStorage activities
    let storedResult = [];
    function setLocalStorage() {
if (JSON.parse(localStorage.getItem('result')) !== null) {
    storedResult = JSON.parse(localStorage.getItem('result'))
}
       
        const obj = {
            date1: startDateInput.value,
            date2: endDateInput.value,
            result
        };

        storedResult.push(obj);
        localStorage.setItem('result', JSON.stringify(storedResult));
    }

    function renderLastResults(data) {
        document.querySelectorAll('#tab1-content .localstorage').forEach(item => item.remove())

        data.slice(-10).forEach(item => {
            const tableRow = document.createElement('tr');
            tableRow.classList.add('localstorage');
            tableRow.innerHTML += `
        
                    <td>${item.date1}</td>
                    <td>${item.date2}</td>
                    <td>${item.result}</td>
               
            `;
            resultList.appendChild(tableRow);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const resultElement = document.querySelector('.result');
        //const selectedUnit = document.querySelector('.btn.active').value;

        //const unitLabels = {
          //  days: 'days',
            //hours: 'hours',
            //minutes: 'minutes',
            //seconds: 'seconds',
        //};

       // const unitLabel = unitLabels[selectedUnit] || 'days';
        resultElement.innerHTML = `The difference between ${startDateInput.value} and ${endDateInput.value} is ${result} `;

        setLocalStorage();

        const storedResults = JSON.parse(localStorage.getItem('result')) || [];
        renderLastResults(storedResults);
    });
}