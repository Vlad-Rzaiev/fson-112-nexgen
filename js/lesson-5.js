// localStorage.setItem('key', { name: 'Adam', age: 30 });

// console.log(localStorage.getItem('keys'));

// console.log(localStorage);

//TODO: Theme switcher
//* Imports
// import {
//   addDataToLocalStorage,
//   getDataFromLocalStorage,
//   removeDataFromLocalStorage,
//   clearDataFromLocalStorage,
// } from './local-storage-api.js';

// import { LS_KEY } from './ls-Key.js';

// //* Refs
// const body = document.querySelector('body');
// const checkboxEl = document.querySelector('#theme-switch');

// //* Callback 1
// const renderPage = () => {
//   const LSdata = getDataFromLocalStorage(LS_KEY);
//   if (LSdata === 'dark') {
//     body.classList.replace('light', 'dark');
//     checkboxEl.checked = true;
//   } else {
//     body.classList.replace('dark', 'light');
//   }
// }

// //* Callback 2
// const onCheckboxClick = event => {
//   console.log(checkboxEl.checked);
//   if (checkboxEl.checked) {
//     body.classList.replace('light', 'dark');
//     addDataToLocalStorage(LS_KEY, 'dark');
//   } else {
//     body.classList.replace('dark', 'light');
//     addDataToLocalStorage(LS_KEY, 'light');
//   }
// }

// //* Add event listeners
// checkboxEl.addEventListener('click', onCheckboxClick);
// document.addEventListener('DOMContentLoaded', renderPage);

// const mounths = ['Січень', 'Лютий'];

// console.log(mounths[new Date('2024-02-01').getMonth()]);

// console.log(new Date().getDay());

//* Calendar

// const containerEl = document.querySelector('.js-container');

// const currentDate = new Date();

// const year = currentDate.toLocaleDateString('uk-UA', { year: 'numeric' });
// const month = currentDate.toLocaleDateString('uk-UA', { month: 'long' });
// const weekday = currentDate.toLocaleDateString('uk-UA', { weekday: 'long' });
// const day = currentDate.toLocaleDateString('uk-UA', { day: 'numeric' });

// console.log(year, month, weekday, day);

// containerEl.querySelector('.js-year').textContent = year;
// containerEl.querySelector('.js-month').textContent = month;
// containerEl.querySelector('.js-day').textContent = weekday;
// containerEl.querySelector('.js-day-number').textContent = day;

//  console.log(Date.now());
