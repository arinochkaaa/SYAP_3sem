
//1
console.log('//1'); 
const flattenArrays = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArrays([], val) : val), []);

const array1 = [1, [1, 2, [3, 4]]]
const array2 = [2, 4];
console.log(flattenArrays(array1, array2).join(' '));
  //2
  const sumArray = (arr) => {
    return arr.reduce((sum, item) => 
      Array.isArray(item) ? sum + sumArray(item) : sum + item
    , 0);
  };
  
  // Пример
  const nestedArray = [1, [2, 3], [4, [5, 6]]];
  console.log(sumArray(nestedArray)); // 21

  //3
  const groupStudents = (students) => {
    return students.reduce((acc, student) => {
      if (student.age > 17) {
        if (!acc[student.groupId]) {
          acc[student.groupId] = [];
        }
        acc[student.groupId].push(student);
      }
      return acc;
    }, {});
  };
  
  // Пример
  const students = [
    { name: 'Alice', age: 18, groupId: 101 },
    { name: 'Bob', age: 17, groupId: 102 },
    { name: 'Charlie', age: 19, groupId: 101 },
    { name: 'David', age: 20, groupId: 103 }
  ];
  
  console.log(groupStudents(students));
  // { '101': [ { name: 'Alice', age: 18 }, { name: 'Charlie', age: 19 } ], '103': [ { name: 'David', age: 20 } ] }

  //4
  const processString = (str) => {
    // Преобразуем строку в ASCII-коды
    const total1 = str.split('').map(char => char.charCodeAt(0)).join('');
  
    // Заменяем все 7 на 1
    const total2 = total1.replace(/7/g, '1');
  
    // Возвращаем разницу
    return total1 - total2;
  };
  
  // Пример
  console.log(processString('ABC')); // 6 (656667 - 656661)

  //5
  const extend = (...objects) => {
    return Object.assign({}, ...objects);
  };
  
  // Пример
  console.log(extend({ a: 1, b: 2 }, { c: 3 })); // { a: 1, b: 2, c: 3 }
  console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 })); // { a: 1, b: 2, c: 3, d: 4 }
  console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 })); // { a: 1, b: 2, c: 3 }

  //6

  const buildTower = (n) => {
    let tower = [];
    for (let i = 0; i < n; i++) {
      const spaces = ' '.repeat(n - i - 1);
      const stars = '*'.repeat(i * 2 + 1);
      tower.push(spaces + stars );
    }
    return tower;
  };
  
  // Пример
  console.log(buildTower(3));
  // [
  //   "  *  ",
  //   " *** ",
  //   "*****"
  // ]
  