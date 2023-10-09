import { calendar } from "./calendar.js";
import { holidays } from "./holidays.js";

const tabs = document.querySelectorAll('.tabs div');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) {
            return;
        }

        tabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');

        if (tab.id === 'tab1') {
            calendar();
        } else if (tab.id === 'tab2') {
            holidays();
        }
    });
});