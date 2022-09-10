/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let myCars = [
    {
        carBrand: 'Toyota',
        price: 8000,
        isAvailableForSale: true,
    },

    {
        carBrand: 'Honda',
        price: 7500,
        isAvailableForSale: false,
    },

    {
        carBrand: 'Suzuki',
        price: 8500,
        isAvailableForSale: false,
    }
]

let newCar = {
    carBrand: 'Ford',
    price: 13000,
    isAvailableForSale: false,
}

myCars.push(newCar);

console.log(myCars);