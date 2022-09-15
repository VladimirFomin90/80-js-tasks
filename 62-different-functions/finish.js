/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// // можно вызывать функцию до их объявления в коде
// console.log(firstFunction(8, 4));

function firstFunction(a, b) {
  return a + b
}

// // можно присваивать новое значение функции
// firstFunction = '777';

// console.log(firstFunction);

// // не можем вызывать функцию до их объявления в коде
// console.log(secondFunction(3, 2));

// анонимная функция
const secondFunction = function (a, b) {
  return a + b
}

// // невозможно присвоить новое значение функции
// secondFunction = '777';

console.log(firstFunction(2, 1));
console.log(secondFunction(1, 9));