import { calendar } from "./calendar.js";
import { holidays } from "./holidays.js";

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    const selectedContent = document.getElementById(`${tabId}-content`);

    selectedTab.classList.add('active');
    selectedContent.classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (!e.target.classList.contains('active')) {
            switchTab(e.target.id);
            
            if (e.target.id === 'tab1') {
                calendar();
            } else if (e.target.id === 'tab2') {
                holidays();
            }
        }
    });
});

switchTab('tab1');
calendar();