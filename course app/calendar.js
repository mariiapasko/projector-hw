'use strict';


export function calendar() {
    const form = document.querySelector('#tab1-content');
    const startDateInput = document.querySelector('#start-date');
    const endDateInput = document.querySelector('#end-date');
    const btn = document.querySelectorAll('.btn');
    let dateDistanceMilliseconds = null;
    let result = 0;

    const storedResult = JSON.parse(localStorage.getItem('result'));

 

// add Listeners to the start and end dates
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

    function addDays(val) {
        const formatDate = (date) => date.toISOString().split('T')[0];
        const currentDate = new Date(startDateInput.value);
        switch (val) {
            case '30':
                currentDate.setMonth(currentDate.getMonth() + 1);
                endDateInput.value = formatDate(currentDate);
                dateDistance();
                break;
            case '7':
                currentDate.setDate(currentDate.getDate() + 7);
                endDateInput.value = formatDate(currentDate);
                dateDistance();
                break;
        }
    }

    form.addEventListener('click', (e) => {
        addBtnActive(e.target);

        switch (e.target.value) {
            case '7':
                addDays('7');
                break;
            case '30':
                addDays('30');
                break;
        }
    })


    /*
    function dateDistance() {
        const dayMilliseconds = 1000 * 60 * 60 * 24;
        dateDistanceMilliseconds = new Date(endDateInput.value) - new Date(startDateInput.value);
        result = Math.floor(dateDistanceMilliseconds / (dayMilliseconds));

    }

 if (storedResult !== null) {
        lastResultHandler(storedResult);
    }
*/


}

