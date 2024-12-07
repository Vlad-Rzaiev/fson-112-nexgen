//TODO:============task-01=========================
//? Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const multiplicateNums = (a, b, callback) => callback(a * b);

// const checkNums = (num) => num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);

// const checkNumbers = (num) => num % 2 === 0 ? (`${num} є парним!`): (`${num} є непарним!`);

// console.log(multiplicateNums(2, 3, checkNums));
// console.log(multiplicateNums(1, 7, checkNums));
// console.log(multiplicateNums(2, 3, checkNumbers));

// console.log(multiplicateNums(2, 3, (num) => num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num)));

//TODO:=========task-01=================
//? Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// // function getNewArr(arr) {
// //     const newArr = [];

// //     for(let num of numbers){
// //         newArr.push(Math.pow(num, 2));
// //     }

// //     return newArr;
// // }

// const getNewArr = arr => arr.map((el) => Math.pow(el, 2));
// console.log(getNewArr(numbers));

//TODO:=========task-02=================
//? Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];

// const flatArr = arr => arr.flatMap(item => item.values);
// console.log(flatArr(data));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = arr => arr.some(item => item.age < 20);

// console.log(checkAge(people));

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 12];

// const checkEvenArr = arr => arr.every(num => num % 2 === 0);

// console.log(checkEvenArr(numbers));

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 4, 6, 8, 9, 10, 12];

// const oddNumInArr = arr => arr.find(num => num % 2 !== 0);

// console.log(oddNumInArr(numbers));

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 200, 5, 1, 3];

// const sortedArr = arr => arr.toSorted((a, b) => a - b);

// const sortedArr = arr => [...arr].sort((a, b) => a - b);

// console.log(sortedArr(numbers));

// console.log(numbers);

//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту.
//Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArr = arr => arr.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedArr(stringArray));

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}.
//Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат:
//[{ name: "John", age: 27 }, { name: "Jane", age: 31 }]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const getAge = arr => arr.filter(item => item.age > 20);

// console.log(getAge(user));

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const getSum = arr =>
//   arr.reduce((acc, number) => (acc += number / arr.length), 0);

// console.log(getSum(numbers));

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const getNewArr = arr =>
//   arr
//     .map(item => item.name)
//     .toSorted((a, b) => a.localeCompare(b))
//     .find(el => el === 'Bob');

// console.log(getNewArr(user));


//! Приватні властивості
//TODO:=========task-01=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */



// class Client {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getLogin() {
//         return this.#login;
//     }

//     set changeLogin(newLogin) {
//         this.#login = newLogin;
//     }

//     get getEmail() {
//         return this.#email;
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }


// }

// const client = new Client('mango', 'mango@gmail.com');
// const client2 = new Client('orange', 'orange@gmail.com')
// client.changeLogin = 'apple';

// console.log(client);
// console.log(client2.getLogin);

// console.log(client.getEmail);


