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