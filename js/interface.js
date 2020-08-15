export const formSearch = document.querySelector('#form-search'),
    divSearch = document.querySelector('div#search'),
    divResult = document.querySelector('div#result'),
    showMessage = function (message, className) {
        const divMessages = document.querySelector('div#message');
        divMessages.innerHTML = message;
        divMessages.classList.add(className);
        setTimeout(() => {
            divMessages.innerHTML = '';
            divMessages.classList.remove(className);
        }, 3000);
    }; 