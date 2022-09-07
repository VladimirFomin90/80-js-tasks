/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const array = [13, undefined, 'terminal'];
console.log(array);

array.push(true, null);
console.log(array);
console.log(array.length);