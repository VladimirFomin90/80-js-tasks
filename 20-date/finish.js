/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const todayDate = new Date();

const todayDateInMs = todayDate.getTime();

console.log(todayDateInMs);