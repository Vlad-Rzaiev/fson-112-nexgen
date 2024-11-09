// ? ksfegeg
// *;lsdvml;e
// !vdklsmk
// todo ekclwnvl;e
// console.log('Hello');

// const a = 10;
// console.log(a);

// let a;
// a = 10;
// console.log(a);

// const a = 1;

// if (a === 1) {
//   const a = 2;
//   console.log(a);

//   const b = 3;
//   console.log(b);
// }
// console.log(a);

// console.log(b);

//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const srt = 'Abcde';

// if (srt.toLowerCase().startsWith('a')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// srt.toLowerCase()[0] === 'a' ? console.log('Yes') : console.log('No');

//TODO: 2 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const num = prompt('Enter your number');

// if (num >= 55 && num <= 99) {
//   alert('Число потрапляє в діапазон');
// } else {
//   alert('Число не потрапляє в діапазон');
// }

// num >= 55 && num <= 99
//   ? alert('Число потрапляє в діапазон')
//   : alert('Число не потрапляє в діапазон');


//TODO: 3===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = prompt('Введіть вік Максима');

// if (ageMaxim > 0 && ageMaxim <= 16) {
//     alert("Діти");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//     alert("Дорослі");
// } else if (ageMaxim >= 60 && ageMaxim <= 100) {
//     alert("Пенсіонери");
// } else {
//     alert("Помилка")
// }
    


//TODO: 4 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt('Оберіть напій').toLowerCase();

// function orderDrink(drink) {
//     let price = 0;
//     switch (drink) {
//         case 'кава':
//              price = 40;
//             break;
//         case 'чай':
//              price = 30;
//             break;
//         case 'сік':
//              price = 50;
//             break;
//         default:
//             return alert('Такого напоя не існує');
//     }
//      return alert(`Сума вашого замовлення ${price} грн`)
// }
// orderDrink(drink);


const drink = prompt('Оберіть напій').toLowerCase();
const drink2 = 'сік';

function orderDrink(nameDrink, price) {
    console.log(nameDrink);
    console.log(price);
    if (nameDrink === 'кава') {
        return alert('40 uah')
    }
    else if (nameDrink === 'чай') {
        return alert('30 uah')
    }
    else if (nameDrink === 'сік') {
        return alert('50 uah')
    }
    else {
        return alert('Такого напоя не існує');
    }
}
orderDrink(drink);
orderDrink(drink2);