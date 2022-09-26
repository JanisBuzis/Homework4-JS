// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: ['key1','key2','key3','key4']

// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]

// Результат: 3

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']

// Результат: 3

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: [['key1': 'value1'],['key2': 'value2'],['key3': 'value3'],['key4': 'value4']]

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// Пример: [1,true,'3','value1',9,'key']

// 	Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }


//1 Задание
let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

function getKeys (someObj) {
    return (Object.keys(someObj))
}
console.log(getKeys(someObj))

//2 Задание
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function getAvg (numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];  
    }
    return sum / numbers.length
}
console.log (getAvg(numbers))

//3 Задание
let values = [1, true,'3', 9, 9, 'key', 'name', 'lastname']
function countString (values) {
    let sumstring = 0
    for (let i = 0; i < values.length; i++) {
        if(typeof values[i] == 'string') {
            sumstring++
        }
    }
    console.log(sumstring);
}
countString(values)

//4 Задание
let someObj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    }

function getEntries (someObj1) {
    return (Object.entries(someObj1))
    }
console.log(getEntries(someObj1))

//5 Задание
//Не смог(