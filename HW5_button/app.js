

const body = document.body;
const button = document.querySelector('.switchButton');
const message = document.createElement('div');

message.classList.add('message');
body.appendChild(message);


const isOn = localStorage.getItem('isOn') === 'true';
const lastChangedTime = localStorage.getItem('lastChangedTime');


if (isOn) {
    body.classList.add('on');
    button.textContent = 'Turn on';
    message.textContent = `Last turn on: ${lastChangedTime}`;
} else {
    body.classList.remove('on');
    button.textContent = 'Turn off';
    message.textContent = `Last turn off: ${lastChangedTime}`;
}


button.addEventListener('click', () => {
    const isOnDark = !body.classList.contains('on');
    const now = new Date();
    const formattedDate = formatDate(now);


    if (isOnDark) {
        message.textContent = `Last turn on: ${formattedDate}`;
    } else {
        message.textContent = `Last turn off: ${formattedDate}`;
    }
    body.classList.toggle('on');
    button.textContent = isOnDark ? 'Turn on' : 'Turn off';

    localStorage.setItem('isOn', isOnDark);
    localStorage.setItem('lastChangedime', formattedDate);
});

function formatDate(date) {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
}


