//1
// базовый объект
function Shape(color) {
    this.color = color;
}

// круг
function Circle(radius, color) {
    Shape.call(this, color);  // Наследование
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//квадрат
function Square(side, color) {
    Shape.call(this, color);  // Наследование
    this.side = side;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

//треугольник
function Triangle(side1, side2, side3, color) {
    Shape.call(this, color);  // Наследование 
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// прямоугольник
function Rectangle(width, height, color) {
    Shape.call(this, color);  // наследование 
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// объекты
const greenCircle = new Circle(5, 'green');
const smallSquare = new Square(3, 'red');
const triangleWithLines = new Triangle(3, 4, 5, 'blue');


console.log(greenCircle.color); // 'green'
console.log(smallSquare.color); // 'red'
console.log(triangleWithLines.side1); // 3


console.log(greenCircle instanceof Circle);  // true
console.log(greenCircle instanceof Shape);   // true


console.log(triangleWithLines.side1, triangleWithLines.side2, triangleWithLines.side3);  // 3 4 5


console.log(smallSquare.hasOwnProperty('color'));  // true


//2
class Human {
    constructor(firstName, lastName, age, address, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.birthYear = birthYear; 
    }

    // шеттер и сеттер для возраста
    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    setAge(age) {
        this.age = age;
    }

    //изменение адреса
    changeAddress(newAddress) {
        this.address = newAddress;
    }
}
class Student extends Human {
    constructor(firstName, lastName, age, address, birthYear, faculty, course, group, recordBookNumber) {
        super(firstName, lastName, age, address, birthYear);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBookNumber = recordBookNumber;
    }

    //изменение курса и группы
    changeCourseGroup(newCourse, newGroup) {
        this.course = newCourse;
        this.group = newGroup;
    }

    //получение полного имени
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Faculty {
    constructor(name, numberOfGroups, numberOfStudents) {
        this.name = name;
        this.numberOfGroups = numberOfGroups;
        this.numberOfStudents = numberOfStudents;
    }

    //изменение числа групп и студентов
    changeGroups(groups) {
        this.numberOfGroups = groups;
    }

    changeStudents(students) {
        this.numberOfStudents = students;
    }

    // получение числа студентов по специальности ДЭВИ
    getDev() {
        let devCount = 0;
        
        for (let student of this.students) {
            if (student.recordBookNumber[4] === '3') {
                devCount++;
            }
        }
        return devCount;
    }

    //получениe списка студентов по группе
    getGroupe(group) {
        return this.students.filter(student => student.group === group);
    }
}
const student1 = new Student('Стас', 'Дрозд', 20, '123 Свердлова', 2004, 'ФИТ', 3, 'A1', '712013012345');
const student2 = new Student('Саня', 'Петров', 21, '456 Свердлова', 2003, 'ФИТ', 4, 'B2', '712013013456');

const faculty = new Faculty('FIT', 5, 200);
faculty.students = [student1, student2];  

console.log(student1.getFullName());  
student1.changeCourseGroup(4, 'B3');
console.log(student1.course);  // 4
console.log(faculty.getDev());  // 0, так как зачетка не содержит "3" на 5-й позиции
console.log(faculty.getGroupe('B2'));  // [student2]
