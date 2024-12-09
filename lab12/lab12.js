class Sudoku {
    constructor() {
      this.originalBoard = Array(9).fill(null).map(() => Array(9).fill(0));
      this.board = JSON.parse(JSON.stringify(this.originalBoard)); // Копия игрового поля
    }
  
    // Метод сброса игрового поля до исходного состояния
    resetBoard() {
      this.board = JSON.parse(JSON.stringify(this.originalBoard));
    }
  
    // Метод проверки строки на ошибки
    checkRow(row) {
      const seen = new Set();
      for (let num of this.board[row]) {
        if (num !== 0 && seen.has(num)) return false;
        seen.add(num);
      }
      return true;
    }
  
    // Метод проверки столбца на ошибки
    checkColumn(col) {
      const seen = new Set();
      for (let i = 0; i < 9; i++) {
        const num = this.board[i][col];
        if (num !== 0 && seen.has(num)) return false;
        seen.add(num);
      }
      return true;
    }
  
    // Метод проверки квадрата 3x3 на ошибки
    checkSquare(squareRow, squareCol) {
      const seen = new Set();
      for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
        for (let j = squareCol * 3; j < squareCol * 3 + 3; j++) {
          const num = this.board[i][j];
          if (num !== 0 && seen.has(num)) return false;
          seen.add(num);
        }
      }
      return true;
    }
  
    // Метод проверки всего игрового поля
    checkBoard() {
      let errors = { rows: [], columns: [], squares: [] };
  
      // Проверка строк
      for (let i = 0; i < 9; i++) {
        if (!this.checkRow(i)) errors.rows.push(i + 1);
      }
  
      // Проверка столбцов
      for (let i = 0; i < 9; i++) {
        if (!this.checkColumn(i)) errors.columns.push(i + 1);
      }
  
      // Проверка квадратов 3x3
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!this.checkSquare(i, j)) errors.squares.push(`${i + 1},${j + 1}`);
        }
      }
  
      return errors;
    }
  
    // Метод для генерации правильно заполненного игрового поля
    generateBoard() {
      // Простая генерация для демонстрации
      // Для полноценного генератора требуется сложный алгоритм
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < 9; i++) {
        let row = nums.slice(i).concat(nums.slice(0, i));
        this.board[i] = [...row];
      }
  
      // Перемешивание строк внутри групп 3x3
      for (let i = 0; i < 9; i += 3) {
        for (let j = i; j < i + 3; j++) {
          let k = i + Math.floor(Math.random() * 3);
          [this.board[j], this.board[k]] = [this.board[k], this.board[j]];
        }
      }
  
      this.originalBoard = JSON.parse(JSON.stringify(this.board));
    }
  
    // Метод для отображения текущего состояния доски в консоль
    printBoard() {
      console.log(this.board.map(row => row.join(' ')).join('\n'));
    }
  }
  
  // Пример использования
  const sudoku = new Sudoku();
  sudoku.generateBoard();
  console.log("Сгенерированное поле:");
  sudoku.printBoard();
  
  const errors = sudoku.checkBoard();
  if (errors.rows.length || errors.columns.length || errors.squares.length) {
    console.log("Ошибки найдены:");
    if (errors.rows.length) console.log("Ошибочные строки:", errors.rows);
    if (errors.columns.length) console.log("Ошибочные столбцы:", errors.columns);
    if (errors.squares.length) console.log("Ошибочные квадраты:", errors.squares);
  } else {
    console.log("Поле заполнено правильно!");
  }
  
  sudoku.resetBoard();
  console.log("Поле после сброса:");
  sudoku.printBoard();
  