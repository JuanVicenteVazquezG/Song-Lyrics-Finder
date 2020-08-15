// Imports
import * as UI from './interface.js';


// Events

UI.formSearch.addEventListener('submit', searchLyrics);

// functions

function searchLyrics(event) {
    event.preventDefault();

    // Retrieve data fron form;

    const artist = document.querySelector('#artist').value,
        song = document.querySelector('#song').value;

    if (artist === '' || song === '') {

        UI.divMessages.innerHTML = 'Error ... All fields must be filled out';
        UI.divMessages.classList.add('error');
        setTimeout(() => {
            UI.divMessages.innerHTML = '';
            UI.divMessages.classList.remove('error');
        }, 3000);
    }

} 