'use strict';

function detonatorTimer(delay) {
    let counter = delay;

    const timerId = setInterval(() => {
        if (counter > 0) {
            console.log(counter);
            counter--;
        } else {
            console.log('BOOM!');
            clearInterval(timerId);
        }
    }, 1000);
}

detonatorTimer(3);