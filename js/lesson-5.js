// localStorage.setItem('key', { name: 'Adam', age: 30 });

// console.log(localStorage.getItem('keys'));

// console.log(localStorage);

//TODO: Theme switcher 
//* Imports 
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  clearDataFromLocalStorage,
} from './local-storage-api.js';

import { LS_KEY } from './ls-Key.js';

//* Refs
const body = document.querySelector('body');
const checkboxEl = document.querySelector('#theme-switch');

//* Callback 1
const renderPage = () => {
  const LSdata = getDataFromLocalStorage(LS_KEY);
  if (LSdata === 'dark') {
    body.classList.replace('light', 'dark');
    checkboxEl.checked = true;
  } else {
    body.classList.replace('dark', 'light');
  }
}

//* Callback 2
const onCheckboxClick = event => {
  console.log(checkboxEl.checked);
  if (checkboxEl.checked) {
    body.classList.replace('light', 'dark');
    addDataToLocalStorage(LS_KEY, 'dark');
  } else {
    body.classList.replace('dark', 'light');
    addDataToLocalStorage(LS_KEY, 'light');
  }
}

//* Add event listeners 
checkboxEl.addEventListener('click', onCheckboxClick);
document.addEventListener('DOMContentLoaded', renderPage);