'use strict';

const menuDropdownBtn = document.querySelector('.menu-dropdown');
const menuDropdownContent = document.querySelector('.menu-dropdown-content');
const userForm = document.querySelector('.user-form');


menuDropdownBtn.addEventListener('click', () => {
    if (menuDropdownContent.className.indexOf('hidden') == -1) {
        menuDropdownContent.classList.add('hidden');

    }
    else {
        menuDropdownContent.classList.remove('hidden');
    }
});


document.addEventListener('click', function(e) {
    if (!userForm.contains(e.target)) {
        menuDropdownContent.classList.add('hidden');
    }  
});
