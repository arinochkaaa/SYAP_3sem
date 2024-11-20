//  1: Деструктуризация массива numbers
let numbers = [1, 2, 3, 4, 5];

// Сохраняем первый элемент массива в переменную firstNumber, а остальные элементы в массив rest
let [firstNumber, ...rest] = numbers;

console.log("Первый элемент массива:", firstNumber); // 1
console.log("Остаток массива:", rest); // [2, 3, 4, 5]


//  2: Деструктуризация объекта user
//2
let user = { name: 'John', age: 30 };
let admin = { admin: true, ...user };
console.log(admin); // Outputs: { admin: true, name: 'John', age: 30 }

// 3: Деструктуризация объекта store
let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ]
        },
        sidebar: []
    }
};

// Деструктуризация для получения likesCount из массива posts
const { state: { profilePage: { posts } } } = store;
posts.forEach(post => console.log("Количество лайков в посте:", post.likesCount)); 
// 12
// 1

// Фильтрация пользователей с четным id
const { state: { dialogsPage: { dialogs } } } = store;
let evenIdUsers = dialogs.filter(dialog => dialog.id % 2 === 0);
console.log("Пользователи с четным id:", evenIdUsers); 
// [{ id: 2, name: 'Andrey' }, { id: 4, name: 'Viktor' }]

// Замена всех сообщений на "Hello user" с помощью метода map
store.state.dialogsPage.messages = store.state.dialogsPage.messages.map(msg => ({ ...msg, message: "Hello user" }));
console.log("Обновленные сообщения:", store.state.dialogsPage.messages); 
// [{ id: 1, message: 'Hello user' }, { id: 2, message: 'Hello user' }, { id: 3, message: 'Hello user' }]


//  4: Добавление новой задачи в массив tasks
let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false }
];

// Новая задача
let newTask = { id: 6, title: "NodeJS", isDone: false };

// Добавляем новую задачу в массив tasks с использованием spread оператора
tasks = [...tasks, newTask];

console.log("Массив задач с новой задачей:", tasks);
// Массив будет содержать новую задачу с id: 6


// 5: Использование spread оператора для передачи массива как аргументов функции
function sumValues(x, y, z) {
    return x + y + z;
}

let numbersToSum = [1, 2, 3,8,9];

// Передаем элементы массива numbersToSum как отдельные аргументы в функцию sumValues
let result = sumValues(...numbersToSum);

console.log("Результат суммы значений:", result); 
