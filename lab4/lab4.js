// 1. Работа с товарами с использованием коллекции Set

let products = new Set();

// Добавление товара
function addProduct(product) {
    products.add(product);
    console.log(`${product} добавлен в список.`);
}

// Удаление товара
function removeProduct(product) {
    if (products.has(product)) {
        products.delete(product);
        console.log(`${product} удален из списка.`);
    } else {
        console.log(`${product} не найден.`);
    }
}

// Проверка наличия товара
function hasProduct(product) {
    return products.has(product) ? `${product} в наличии.` : `${product} отсутствует.`;
}

// Количество товаров
function productCount() {
    return `Всего товаров: ${products.size}`;
}

// Пример использования
addProduct('Телефон');
addProduct('Ноутбук');
console.log(hasProduct('Телефон')); // Телефон в наличии.
removeProduct('Телефон');
console.log(hasProduct('Телефон')); // Телефон отсутствует.
console.log(productCount()); // Всего товаров: 1


// 2. Работа с коллекцией Set для студентов

let students = new Set();

// Добавление студента
function addStudent(student) {
    students.add(student);
    console.log(`Студент ${student.name} добавлен.`);
}

// Удаление студента по номеру зачетки
function removeStudentById(recordBookNumber) {
    students.forEach(student => {
        if (student.recordBookNumber === recordBookNumber) {
            students.delete(student);
            console.log(`Студент с номером зачетки ${recordBookNumber} удален.`);
        }
    });
}

// Фильтрация по группе
function filterByGroup(group) {
    return [...students].filter(student => student.group === group);
}

// Сортировка по номеру зачетки
function sortByRecordBookNumber() {
    return [...students].sort((a, b) => a.recordBookNumber - b.recordBookNumber);
}

// Пример использования
addStudent({ recordBookNumber: 101, group: 'A1', name: 'Иван Иванов' });
addStudent({ recordBookNumber: 102, group: 'A2', name: 'Петр Петров' });
addStudent({ recordBookNumber: 103, group: 'A1', name: 'Мария Смирнова' });

console.log('Фильтр по группе A1:', filterByGroup('A1'));
console.log('Сортировка по зачеткам:', sortByRecordBookNumber());

removeStudentById(102);

// 3. Работа с коллекцией Map для корзины товаров

let cart = new Map();

// Добавление товара
function addToCart(id, name, quantity, price) {
    cart.set(id, { name, quantity, price });
    console.log(`Товар ${name} добавлен в корзину.`);
}

// Удаление товара по id
function removeFromCartById(id) {
    if (cart.has(id)) {
        cart.delete(id);
        console.log(`Товар с id ${id} удален.`);
    } else {
        console.log(`Товар с id ${id} не найден.`);
    }
}

// Удаление товаров по названию
function removeFromCartByName(name) {
    cart.forEach((value, key) => {
        if (value.name === name) {
            cart.delete(key);
        }
    });
    console.log(`Товары с названием ${name} удалены.`);
}

// Изменение количества товара
function updateProductQuantity(id, quantity) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.quantity = quantity;
        cart.set(id, product);
        console.log(`Количество товара с id ${id} обновлено.`);
    }
}

// Изменение стоимости товара
function updateProductPrice(id, price) {
    if (cart.has(id)) {
        let product = cart.get(id);
        product.price = price;
        cart.set(id, product);
        console.log(`Цена товара с id ${id} обновлена.`);
    }
}

// Рассчет количества позиций и общей стоимости
function cartSummary() {
    let totalItems = 0;
    let totalCost = 0;
    
    cart.forEach((value) => {
        totalItems += value.quantity;
        totalCost += value.quantity * value.price;
    });

    console.log(`Общее количество товаров: ${totalItems}`);
    console.log(`Общая стоимость: ${totalCost} руб.`);
}

// Пример использования
addToCart(1, 'Телефон', 2, 20000);
addToCart(2, 'Ноутбук', 1, 50000);
addToCart(3, 'Телефон', 1, 20000);
updateProductQuantity(1, 3);
updateProductPrice(2, 45000);

cartSummary();

removeFromCartById(3);
removeFromCartByName('Телефон');

cartSummary();

// 4. Кэширование с использованием WeakMap

let cache = new WeakMap();

// Функция с кэшированием
function cachedFunction(param) {
    if (cache.has(param)) {
        console.log('Берем данные из кэша.');
        return cache.get(param);
    } else {
        let result = param * 2; // Пример вычисления
        cache.set(param, result);
        console.log('Вычисляем результат.');
        return result;
    }
}

// Пример использования
let param1 = { value: 10 };
let param2 = { value: 20 };

console.log(cachedFunction(param1)); // Вычисляем результат
console.log(cachedFunction(param1)); // Берем данные из кэша

console.log(cachedFunction(param2)); // Вычисляем результат
