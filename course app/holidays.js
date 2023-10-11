
export function holidays() {
    const form = document.querySelector('#tab2-content');
    const countrySelect = document.querySelector('#countryDropdown');
    const table = document.querySelector('.holidayTable');
    const yearSelect = document.querySelector('#yearDropdown');
    const sortBtn = document.querySelector('.sort');
    const apiKey = 'XMyuEtIjU6zURSgt8IQtlcxXXJojEwFS';
    const titles = document.querySelector('.title');

    let arrow = null;
    titles.style.display = "none";


    function addToTable(data) {
        document.querySelectorAll('.tab2 .storage').forEach(item => item.remove());

        data.forEach(element => {
            const newDate = new Date(element.date.iso);
            const tableRow = document.createElement('tr');
            tableRow.classList.add('storage');
            tableRow.className = 'tableRow'
            tableRow.innerHTML = `
                <td>${newDate.getDate()} ${newDate.toLocaleString('default', { month: 'short' })} ${newDate.getFullYear()}</td>
                <td>${element.name}</td>
            `;
            table.appendChild(tableRow);
        });
    }

    function getHolidays() {
        fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${countrySelect.value}&year=${yearSelect.value}`)
            .then(response => response.json())
            .then(data => {
                arrow = data.response.holidays;
                table.innerHTML='';
                addToTable(arrow);
                sortBtn.classList.add('active');
            })
            .catch(addError);
    }

    function addError() {
        form.innerHTML += `<div class="error">Something went wrong</div>`;
    }

    sortBtn.addEventListener('click', () => {
sortBtn.classList.toggle('active');
table.innerHTML='';
const rows = Array.from(table.querySelectorAll('.tableRow'));
rows.reverse();
rows.forEach(row => table.removeChild(row));
rows.forEach(row => table.appendChild(row));
        
        
        arrow.sort(() => -1);

        addToTable(arrow);
    });

    countrySelect.addEventListener('change', () => {
        yearSelect.removeAttribute('disabled');
        getHolidays();
    });

    yearSelect.addEventListener('change', getHolidays);

    fetch(`https://calendarific.com/api/v2/countries?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            data.response.countries.forEach(element => {
                const option = document.createElement('option');
                option.innerHTML = element.country_name;
                option.value = element['iso-3166'];
                countrySelect.appendChild(option);
            });
        })
        .catch(addError);

    for (let i = 2001; i < 2050; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        if (i === new Date().getFullYear()) {
            option.setAttribute('selected', 'selected');
        }
        yearSelect.appendChild(option);
    }
}