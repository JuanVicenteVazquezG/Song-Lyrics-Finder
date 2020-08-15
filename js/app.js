// Imports
import API from './api.js';
import * as UI from './interface.js';


// Events

UI.formSearch.addEventListener('submit', searchLyrics);

// functions

function searchLyrics(event) {
    event.preventDefault();

    // Retrieve data fron form;

    const artist = document.querySelector('#artist').value,
        song = document.querySelector('#song').value;
    // If the user left the fields empty
    if (artist === '' || song === '') {
        UI.showMessage('Error ... All fields must be filled out', 'error');
    }
    else {
        // If the form is fill out make an Api fetch
        const api = new API(artist, song);
        api.retrieveDataFromApi()
            .then(response => {
                if (response.response.lyrics) {
                    // If the song exist
                    const { lyrics } = response.response;
                    UI.divResult.innerHTML = lyrics;
                }
                else {
                    UI.showMessage('Error... song or artist not found, please try again with other search', 'error');
                    formSearch.reset();
                }

            });

    }
}