// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-рол');
// // styles.unshift('Класика');

// // const style = ['Класика'];
// // const newStyles = style.concat(styles);
// styles.unshift('Rep');
// // styles[1] = 'Класика';
// const index = styles.indexOf('Блюз');
// if (index !== -1) {
//   styles[index] = 'Класика';
// }
// // for (let i = 0; i < styles.length; i++) {
// //   console.log(`${i + 1}: ${styles[i]}`);
// // }

// for (const style of styles) {
//   console.log(style);
// }

// console.log(styles);

//TODO: =========task-2=================
//* Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.
// const message = 'JavaScript is a popular programming language.';
// const message1 = 'Hello World!';

// // function slugify(str){
// //     const arr = str.split(' ');
// //     const slug = arr.join('-');

// //     return slug.toLowerCase();
// // }

// function slugify(str){
//     return str.replaceAll(' ', '-').toLowerCase();
// }

// console.log(slugify(message));
// console.log(slugify(message1));

//TODO: =========task-3=================
//* Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)
// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 's';
// const substring1 = 'H';

// function findSubStr(arr, item){
//     let arrWithSubStr = [];
    
//     for(const word of arr){
//         if(word.toLowerCase().includes(item.toLowerCase())){
//             arrWithSubStr.push(word);
//         }
//     }

//     const message = arrWithSubStr.join(', ');
//     return (`Масив елементів, що містять підстроку ${item}: ${message}`);
// }

// console.log(findSubStr(wordsArray, substring));
// console.log(findSubStr(wordsArray, substring1));

//TODO: =========task-04=================
//* Напишіть функцію calculateAverage()
//* яка приймає довільну кількість
//* аргументів і повертає їхнє середнє значення.
//* Додати перевірку, що аргументи це числа.

// function calculateAverage(){
//     let sum = 0;
//     let count = 0;

//     for(const num of arguments){
//         if(typeof num === 'number'){
//             sum += num;
//             count += 1;
//         }
//     }

//     const averageNum = sum / count;
//     return averageNum;
// }

// console.log(calculateAverage(3, 5, 2, 'Hello', true));
// console.log(calculateAverage(2, 9));