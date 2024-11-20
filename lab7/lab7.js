//1
const person = {
    name: "Arina volosyuk",
    age: 18,
    greet : function(){
        console.log("Привет, " + this.name);
    },
    ageFilterYears(years){
        return this.age+years;
    }
};
console.log(person.ageFilterYears(1));//19
//2
const car ={
    model: "porsche 911",
    year:"2020",
    getInfo :function(){
        console.log("модель: "+ this.model, "год выпуска: "+ this.year)
    }
}
car.getInfo();
//3
function Book(title,autor){
    this.title=title;
    this.autor = autor;

    this.getTitle= function(){
        return this.title;
    }
    this.getAutor = function(){
        return this.autor;
    }

    const myBook= new Book("kniga","arina");

    console.log(myBook.getTitle());
    console.log(myBook.getAutor());
}
//4
const team ={
    players: [
    {name: "arina", position:"starosta"},
    {name: "ilya",position:"smertnik" },
    ],
    showPlayers: function(){
        this.players.forEach(player =>{
            console.log(`Имя: ${player.name}, Позиция: ${player.position}`);
        })
    }
}
//5
const counter = (function() {
    let count = 0;
  
    return {
      increment: function() {
        return ++count; 
      },
      
      decrement: function() {
        return --count; 
      },
      
      getCount: function() {
        return count; 
      }
    };
  })();
  
  console.log(counter.increment()); 
  console.log(counter.increment()); 
  console.log(counter.decrement()); 
  console.log(counter.getCount());  
  
  //6
  const item ={};

Object.defineProperty(item, 'price', {
    value: 100,
    writable: true,   // Свойство можно изменять
    configurable: true, // Свойство можно удалять или изменять его дескрипторы
    enumerable: true   // Свойство будет перечисляемым
});

console.log(item.price); // 100


item.price = 200;
console.log(item.price); // 200


delete item.price;
console.log(item.price); // undefined (свойство удалено)

  //7
  const circle ={
    _radius: '',

    get radius(){
        console.log("введите значение радиуса: ");
        return this._radius;
    },
    set radius(value){
        console.log("изменение значения");
        if(value == this._radius){
            console.log("Такое значение есть, введите другое");
        }else{
            this._radius=value;
        }
    }
  }
  circle.radius == 10;
  console.log(circle.radius);

circle.radius == 20;
console.log(circle.radius);

//8
const carr ={};
Object.defineProperty(carr, 'make',{
    value: 'porsche',
    writable:true,
    configurable: true,
    enumerable: true
});
Object.defineProperty(carr, 'model',{
    value: '911',
    writable:true,
    configurable: true,
    enumerable: true
});
Object.defineProperty(carr, 'year',{
    value: '2022',
    writable:true,
    configurable: true,
    enumerable: true
});

console.log(carr);

carr.make = 'Toyota';
carr.model = 'camry';
carr.year ='2024';

console.log(carr);

delete carr.year;
console.log(carr);
//9

const numbers = [1, 2, 3];


Object.defineProperty(numbers, 'sum', {
    
    get: function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    },
    enumerable: false,  // Свойство не будет перечисляемым в циклах
    configurable: false  // Свойство нельзя переопределить
});

// Проверяем сумму элементов массива
console.log(numbers.sum); 


numbers.sum = 10; // Попытка изменить значение свойства sum
console.log(numbers.sum); // 6 (свойство sum остается неизменным)


console.log(Object.keys(numbers)); // [] - sum не будет включен в перечисляемые свойства

//`10
const rectangle = {
    _width: 0,  
    _height: 0, 

    get width() {
        return this._width;
    },

   //wight
    set width(value) {
        if (value < 0) {
            console.log("Ширина не может быть отрицательной!");
        } else {
            this._width = value;
        }
    },

    
    get height() {
        return this._height;
    },

    //высотa
    set height(value) {
        if (value < 0) {
            console.log("Высота не может быть отрицательной!");
        } else {
            this._height = value;
        }
    },

    get area() {
        return this._width * this._height;
    }
};


rectangle.width = 5;  
rectangle.height = 10; 


console.log("Ширина:", rectangle.width);   
console.log("Высота:", rectangle.height);   


console.log("Площадь:", rectangle.area);    


rectangle.width = -3;  
rectangle.height = -4; 
//11
const user = {
    _firstName: 'arina',  
    _lastName: 'volosyuk',    

    
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    
    set fullName(name) {
        const parts = name.split(' '); // Разбиваем имя на части
        if (parts.length >= 2) {
            this._firstName = parts[0]; 
            this._lastName = parts[1];   
        } else {
            console.log("Пожалуйста, укажите полное имя и фамилия.");
        }
    }
};


console.log(user.fullName); 


user.fullName = 'arina volosyuk';
console.log(user.fullName); 


user.fullName = 'stas'; 
console.log(user.fullName); 
