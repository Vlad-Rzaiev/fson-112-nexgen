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


// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// Створити обьект human

// const human = {
//     name: 'Bob',
//     hobby: 'Soccer',
//     age: 25,

//     greet() {
// console.log(`Hello ${this.name}`);
//     }
// }

// human.mood = 'happy';
// human['lastName'] = 'Mercer';
// human.hobby = 'skydiving';

// console.log(human);



// const human1 = Object.create(human);
// human1.name = 'John';

// console.log(human1.greet());
//

// for (const key in human1) {
//     if (human1.hasOwnProperty(key)) {
//           console.log(key);
//     }
// }

// console.log(Object.keys(human));
// console.log(Object.values(human));
// console.log(Object.entries(human));

// const salaries = {
//     bob: 1700,
//     john: 1500,
//     mango: 1600,
// }

// function totalSalaries(object) {
//     let sum = 0;

//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             sum += object[key];
//         }
//     }
//     return sum;
// }

// console.log(totalSalaries(salaries));

// function totalSalaries(object) {
//     let sum = 0;

//     for (const item of Object.values(object)) {
//         sum += item;
//     }
//     return sum;
// }

//TODO:============task-2==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const cart = {
//     products: [],
//     price: [],

//     calculateTotal() {
//         let totalPrice = 0;

//         for (const price of this.price) {
//             totalPrice += price;
//         }
//         return `Сума вашого замовлення: ${totalPrice} грн`;
//     },

//     showProducts() {
//         return this.products;
//     },

//     addProduct(productName) {
//         this.products.push(productName);
//     },

//      addPrice(price) {
//         this.price.push(price);
//     },
// }

// cart.addProduct('Phone');
// cart.addProduct('Laptop');

// cart.addPrice(30000);
// cart.addPrice(25000);

// console.log(cart.calculateTotal());

