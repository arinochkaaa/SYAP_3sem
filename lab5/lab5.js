//вариант 1
function makeCounter() {
  let currentCount = 1;

  return function() {   // (*)
      return currentCount++;
  };
}

let counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

let counter2 = makeCounter();
alert( counter2() ); // 1
alert( counter2() ); // 2

// варинант 2

let currentCount = 1
function makeCounter2() {
  return function() {   // (*)
      return currentCount++;
  };
}

let counter3 = makeCounter2();

alert( counter3() ); // 1
alert( counter3() ); // 2
alert( counter3() ); // 3

let counter4 = makeCounter2();
alert( counter4() ); // 4
alert( counter4() ); // 5


// Функция запоминает ссылку на переменную name, а не её значение, когда она была создана

// 2. Каррирование: расчет объема прямоугольного параллелепипеда
function volume(length) {
  return function(width) {
    return function(height) {
      return length * width * height;
    };
  };
}

// Пример использования:
let calculateVolume = volume(10); // одно ребро фиксировано
console.log(calculateVolume(5)(8)); // 400

// 3. Генератор координат движения объекта
function* moveObject() {
  let x = 0, y = 0;
  while (true) {
    let direction = prompt("Введите команду: left, right, up, down");
    if (direction === "left") x -= 10;
    if (direction === "right") x += 10;
    if (direction === "up") y += 10;
    if (direction === "down") y -= 10;
    console.log(`Координаты объекта: (${x}, ${y})`);
    yield {x, y};
  }
}

const move = moveObject();
move.next(); // Запуск генератора

// 4. Работа с глобальным объектом window
for (let key in window) {
  if (window.hasOwnProperty(key)) {
    console.log(key + " = " + window[key]);
  }
}

// Переопределение переменной через глобальный объект
window.myVar = "Новое значение";
console.log(window.myVar); // "Новое значение"
