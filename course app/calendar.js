'use strict';


export function calendar() {
    const form = document.querySelector('#tab1-content');
    const startDateInput = document.querySelector('#start-date');
    const endDateInput = document.querySelector('#end-date');
    const btn = document.querySelectorAll('.btn');
    let dateDistanceMilliseconds = null;
    let result = 0;

    const storedResult = JSON.parse(localStorage.getItem('result'));

    if (storedResult !== null) {
        lastResultHandler(storedResult);
    }

    startDateInput.addEventListener('change', () => {
        if (startDateInput === '') {
            return endDateInput.setAttribute('disabled', 'disabled');
        }
        if (new Date(startDateInput.value) > new Date(endDateInput.value)) {
            return endDateInput.value = '';
        }
        endDateInput.removeAttribute('disabled');
        endDateInput.setAttribute('min', endDateInput.value);
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


    let arr = [];

    function setLocalStorage() {

        if (storedResult !== null) {
            arr = storedResult;
        }

        let obj = {
            startDate: startDateInput.value,
            endDate: endDateInput.value,
            result,
        };

        arr.push(obj);
        localStorage.setItem('result', JSON.stringify(arr));
    }

    function lastResultHandler(data) {
        const localstorageElements = document.querySelectorAll('.tab1 .storage');
        localstorageElements.forEach(item => item.remove());

        const lastResultElement = document.getElementById('lastResult'); // assuming lastResultElement is defined somewhere

        data.slice(-10).forEach(item => {
            lastResultElement.innerHTML += `
            <tr class="storage">
                <td>${item.startDateInput}</td>
                <td>${item.endDateInput}</td>
                <td>${item.result}</td>
            </tr>
        `;
        });
    }

}




