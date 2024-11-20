//Задание 1

let a = 5
let name = "Name"
let i = 0;
let double = 0.23
let result = 1/0
let answer = true
let no = null

2 Задание

function calculateSquares() {
    let wpr = 45;  // Ширина прямоугольника
    let hpr = 21; // Высота прямоугольника

    
    let skvadrat = 5; // kvadrat

    let wkv = Math.floor(wpr / skvadrat);
    let shkv = Math.floor(hpr / skvadrat);

    
    let total = wkv * shkv;

    return total;
}

console.log(calculateSquares()); 

//3 задание

let i = 2;

let a = ++i; 
let b = i++; 

console.log("a =", a); 
console.log("b =", b); 
console.log("i =", i); 

if (a === b) {
    console.log("a и b равны");
} else if (a > b) {
    console.log("a больше, чем b");
} else {
    console.log("a меньше, чем b");
}
4 задание

let result = ("Котик" === "котик") ? "равны" : "не равны";
console.log(result);

let result = ("Котик" === "китик") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = ("Кот" === "Котик") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = ("Привет" === "Пока") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (53 === "53") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (false === 0) ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (54 === true) ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (123 === false) ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (true === "3") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (3 === "5мм") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (8 === "-2") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (34 === "34") ? "равны" : "не равны";
console.log(result);  // "не равны"

let result = (null === undefined) ? "равны" : "не равны";
console.log(result);  // "не равны"


5 

const teacherName = "Кизино Александра Валентиновна";

const normalizedTeacherName = teacherName.toLowerCase();
const userInput = prompt("Введите ваше имя (можно с отчеством и фамилией):");
const normalizedUserInput = userInput.toLowerCase();
if (normalizedTeacherName.includes(normalizedUserInput)) {
    alert("Правильно.");
} else {
    alert("Лаба не сдана.");
}

6

let russian = prompt("Сдал экзамен по русскому языку? (да/нет)").toLowerCase() === 'да';
let math = prompt("Сдал экзамен по математике? (да/нет)").toLowerCase() === 'да';
let english = prompt("Сдал экзамен по английскому языку? (да/нет)").toLowerCase() === 'да';


function evaluateStudent(russian, math, english) {
    if (russian && math && english) {
        console.log("тебя переводят на следующий курс.");
    } else if (!russian && !math && !english) {
        console.log("тебя отчисляют.");
    } else {
        console.log("у тебя пересдача.");
    }
}


evaluateStudent(russian, math, english);

//7
// 2
// "05"
// "5мм"
// 0
// 81
// -1
// 3
// NaN
// -2
// 7.

//8

function task8(){
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
          console.log(i + 2); // К четному числу прибавляем 2
        } else {
          console.log(`${i}мм`); // Преобразуем нечетное число в строку вида "Xмм"
        }
      }
      
}
//9
// через массив
const daysOfWeekArray = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const dayNumberm = parseInt(prompt("Введите номер дня недели (1-7):"));

if (dayNumberm >= 1 && dayNumberm <= 7) {
  console.log(daysOfWeekArray[dayNumberm]);
} else {
  console.log("Неверный номер дня недели.");
}
//через объект
const daysOfWeekObject = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье"
};

const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));

if (daysOfWeekObject[dayNumber]) {
  console.log(daysOfWeekObject[dayNumber]);
} else {
  console.log("Неверный номер дня недели.");
}
//10
// Функция с тремя параметрами
function createString(param1 = "По умолчанию", param2, param3) {
  return `${param1} ${param2} ${param3}`;
}

// Ввод третьего параметра пользователем
const userInput = prompt("Введите третий параметр:");

// Вызов функции
const result = createString(undefined, "Второй параметр", userInput);

console.log(result);
//11a
// base
function params(a, b) {
  if (a === b) {
    // Квадрат, возвращаем периметр
    return 4 * a;
  } else {
    // Прямоугольник, возвращаем площадь
    return a * b;
  }
}

console.log(params(5, 5)); // Квадрат: периметр 20
console.log(params(5, 10)); // Прямоугольник: площадь 50
//b
// v peremennoi
const paramsExpression = function(a, b) {
  if (a === b) {
    return 4 * a; // Периметр квадрата
  } else {
    return a * b; // Площадь прямоугольника
  }
};

console.log(paramsExpression(7, 7)); // Квадрат: периметр 28
console.log(paramsExpression(3, 6)); // Прямоугольник: площадь 18
//c
// arrow
const paramsArrow = (a, b) => a === b ? 4 * a : a * b;


console.log(paramsArrow(8, 8)); // Квадрат: периметр 32
console.log(paramsArrow(4, 9)); // Прямоугольник: площадь 36
