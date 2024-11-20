function basicOperation(operation, value1, value2) {
    if (operation == "+") {
        return value1 + value2;
    }
    else if (operation == "-") {
        return value1 - value2;
    }
    else if (operation == "*") {
        return value1 * value2;
    }
    else if (operation == "/") {
        if (value2 === 0) {
            return "Ошибка: деление на ноль";
        }
        return value1 / value2;
    }
    else {
        return "Неверная операция";
    }
}

//2

prompt("Введите колличество чисел, до которого нужно посчитать сумму кубов:", chislo);
for(i=1; i<=chislo; i++){
    summa+=math.pow(chislo,3);
}
return summa;

//3
let arr = [1,2,5,3,6,7];
function srednee(){
    if (arr.lengs == 0){
        return 0;
    }
    else{
        for (i=0; i< arr.lengs; i++){
            sred += arr.lengs;
        } 
        arifm = sred/arr.lengs;
        return arifm;
    }
}
//4
function reverseAlphabetOnly(str) {
    let filteredStr = str.replace(/[^a-zA-Z]/g, '');// Убираем все символы русские
    let reversedStr = filteredStr.split('').reverse().join('');//разделяем, переворачиваем, собираем
    
    return reversedStr;
    
}
console.log(reverseAlphabetOnly("Arina Volos44554uk")); 
//5
function repeatString(n, s) {
    return s.repeat(n);
}
console.log(repeatString(3, "привет")); // "приветприветпривет"
//6
function arrayDifference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}


const arr1 = ["арина", "стас", "илья", "милочкин"];
const arr2 = ["илья", "милочкин"];

const arr3 = arrayDifference(arr1, arr2);
console.log(arr3); // ["арина", "стас"]


