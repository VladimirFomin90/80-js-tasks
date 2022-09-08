/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь
// 1 вариант конвертации строки в число
// console.log(parseInt('23'));
// console.log(typeof parseInt('23'));

// 2 вариант конвертации строки в число
// console.log(+'32');
// console.log(typeof +'32');

console.log(parseInt(myVariable1) <= parseInt(myVariable2));


myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь

console.log(parseInt(myVariable1) <= parseInt(myVariable2));
