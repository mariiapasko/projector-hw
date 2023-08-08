'use strict';

function detonatorTimer(delay) {
    let currentDelay = delay;

    function countDown() {
        if (currentDelay > 0) {
            console.log(currentDelay);
            currentDelay--;
            setTimeout(countDown, 1000);
        } else {
            console.log('Boom!');
        }
    }
    countDown();
}
detonatorTimer(3);

