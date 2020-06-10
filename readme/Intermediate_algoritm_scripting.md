# Введение в средние задачи алгоритмов
[На главную](../README.md)  


## Суммирование всех чисел в диапазоне


```javascript
function sumAll(arr) {

  let copyArr = arr.sort((a, b) => a - b);
  let result = 0;

  for (let i = copyArr[0]; i <= copyArr[1]; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([1, 4]));
```


## Различие 2 массивов


Моё решение

```javascript
function diffArray(arr1, arr2) {

  let newArr = [];

  function foreacher(arr1, arr2) {
    arr1.forEach(element => {
      
      let check = arr2.some(function(currentValue) {
        return currentValue  == element;
      });
      
      if (!check) {
        newArr.push(element)
      }  
    });
  }

  foreacher(arr1, arr2);
  foreacher(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
```


Крутое решение в ответах

```javascript
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```


## Найти и уничтожить


Моя версия

```javascript
function destroyer(arr) {

  let copyArr = [...arr]

  for (let i = 1; i < arguments.length; i++) {
    let killer = arguments[i];
    arr.forEach(element => {
      if (element === killer) {
        copyArr.splice(copyArr.indexOf(element), 1)
      }
    });
  }

  return copyArr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
```


Короткое решение


```javascript
const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));
```


## Wherefore art thou


Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих совпадающие пары имен и значений (второй аргумент). Каждая пара имени и значения исходного объекта должна присутствовать в объекте из коллекции, если он должен быть включен в возвращаемый массив.

Например, если первый аргумент равен ```[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]```, а второй ```{ last: "Capulet" }```, тогда вы должны вернуть третий объект из массива (первый аргумент), поскольку он содержит имя и его значение, которое было передано в качестве второго аргумента.


```javascript
function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  collection.forEach(obj => {
    let check = true;
    for (const key in source) {
      if (obj[key] !== source[key]) { check = false }
    }
    if (check) { arr.push(obj) }
  });
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
// result: [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
```


## Spinal Tap Case

Преобразуйте строку в позвоночный регистр. Позвоночный регистр - это-когда-все-слова-соединяться-тире и иду с маленькой буквы.


```javascript
function spinalCase(str) {

  return str.trim().split(/\W+|_|(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase('The_Andy_GriffithShow-hmm'));
```


## Pig Latin


Свиная латынь - это способ изменения английских слов. Эти правила заключатся в следующем: 

1. Если слово начинается с согласной, возьмите первый согласный или согласный кластер, переместите его в конец слова и добавьте к нему "ay".
2. Если слово начинается с гласной, просто добавьте "way" в конце.

Переведите предоставленную строку в свиную латынь. Входные строки гарантированно будут на английским и в нижнем регистре.


```javascript
function translatePigLatin(str) {

  let reg = /^[b-df-hj-np-tv-z]+/
  let ins = str.match(reg) === null ? 'w' : str.match(reg)
  return str.replace(reg, '') + ins + 'ay'
}

console.log(translatePigLatin("algorithm"))
// result - algorithmway
```


## Поиск и замена


Выполните поиск и замените слово в предложении, используя предоставленные аргументы, и верните новое предложение.

1. Первый аргумент - это предложение для выполнения поиска и замены.
2. Второй аргумент - это слово, которое вы будете заменять
3. Третий аргумент - то, на что вы будете заменять слово из второго аргумента

Внимание
Сохраните регистр первого символа в исходном слове, когда вы заменяете его.
Например, если вы хотите заменить слово "Книга" словом "собака", то оно должно быть заменено на "Собака".


```javascript
function myReplace(str, before, after) {

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1)
  } else {
    after = after[0].toLowerCase() + after.slice(1)
  }

  return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch
```


## Пара ДНК


В цепочке ДНК отсутсвует парный элемент. Возьмите каждый символ, получите его пару и верните результаты в виде двумерного массива.

Базовые пары - это пары  AT и CG. Сопоставьте недостающий элемент с указанным символом.

Верните указанный символ в качестве первого элемента в каждом массиве.

Например, для входного ```GCG``` верните ```[["G", "C"], ["C","G"],["G", "C"]]```

Символ и его пара объединяются в массив, и все массивы группируются в один инкапсулирующий массив.


```javascript
function pairElement(str) {

    const DNA = {
      'A' : 'T',
      'T' : 'A',
      'C' : 'G',
      'G' : 'C'
    }
  
    return str.split('').reduce((accum, element) => {
  
        accum.push([element, DNA[element]])
        return accum
    }, [])
}
  

console.log(pairElement("GCG"))
//  [["G", "C"], ["C","G"],["G", "C"]]
```


## Пропавшие буквы


Найдите недостающую букву в переданном диапазоне букв и верните ее.

Если в диапазоне присутствуют все буквы, верните undefined.


```javascript
function fearNotLetter(str) {

    const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let index = (str[0] + str[str.length - 1]).split('').map(index => Alphabet.indexOf(index));
    const result = Alphabet.slice(index[0], index[1] + 1).filter(missing => str.indexOf(missing) === -1);

    return result.length < 1 ? undefined : result.join('');
}
  
console.log(fearNotLetter("abce"));
// result - d
```


## Сортировка со слиянием


Напишите функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений в порядке исходных предоставленных массивов.

Другими словами, все значения, присутствующие во всех массивах, должны быть включены в их первоночальном порядке, но без дубликатов в конечном массиве.

Уникальные числа должны быть отсортированы по их первоначальному порядку, но конечный масив не должн быть отсортирован в числовом порядке.


```javascript
// Мое решение
function uniteUnique(...arr) {
    let result = [];

    arr.forEach(element => result = result.concat(element));
    result = new Set(result);

    return [...result] 
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// return [1, 3, 2, 5, 4]

//Крутое решение из hint
function uniteUnique(...arrays) {
    
    const flatArray = [].concat(...arrays);
  
    return [...new Set(flatArray)];
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
```


## Преобразование HTML сущностей


Преобразуйте символы ```&```, ```<```, ```>```, ```"```(двойные кавычки) и ```'``` (апостроф) в строку соответсвующей им HTML сущности.


```javascript

// Мое решение
function convertHTML(str) {
    const html = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '\'' : '&apos;'
    }

    return [...str].reduce((accum, symbol) => {
        if (html[symbol]) {
            return accum += html[symbol]
        }
        return accum += symbol
    }, '');
}
  
console.log(convertHTML('Stuff in "quotation marks"'));
// return -  Stuff in &quot;quotation marks&quot;

//Крутое решение из hint
function convertHTML(str) {
    
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };

    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
  
console.log(convertHTML("Dolce & Gabbana > kek's < ololo"));
```


## Суммируйте все нечетные числа Фибоначчи

Учитывая положительное целое число ```num```, верните сумму всех нечетных чисел Фибоначчи, которые меньше или равны ```num```.

Первые два числа в последовательности Фибоначчи равны 1 и 1. Каждое дополнительное число в последовательности является суммой двух предыдущих чисел. Первые шесть чисел последовательности Фибоначчи - это 1, 1, 2, 3, 5, 8.

Например, ```sumFibs(10)``` должен возвращать 10, потому что все нечетные числа Фибонначчи, меньшие или равные 10, равны 1, 1, 3 и 5.


```javascript
function sumFibs(num) {

    let result = 0; 
    let prevNumber = 0;
    let currNumber = 1;
    while (currNumber <= num) {
        if (currNumber % 2 == 1) {
            result += currNumber
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
  
console.log(sumFibs(4000000));
// return                       4613732
```


## Сумма всех простых чисел


Простое число - это целое число больше 1 с ровно двумя делителями: на 1 и на себя само. Например, 2 - это просто число, потому что оно делится только на 1 и 2. Напротив, 4 не является простым числом, так как оно делится на 1, 2 и 4.

Перепишите ```sumPrimes``` так, чтобы он возвращал сумму всех простых чисел, которые меньше или равны ```num```.


```javascript
function sumPrimes(num) {
    function simpleNumber(num) {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    let result = 0;

    for (let i = 1; i <= num; i++) {    
        if (simpleNumber(i)) {
            result += i;
        }
    }

    return result;
}
  
console.log(sumPrimes(10));
// return 17
// 2, 3, 5, 7
```


## Наименьшее общее кратное


Найдите наименьшее общее кратное из приведенных параметров, которое может быть равномерно разделено на оба, а также на все последовательные числа в диапазоне между этими параметрами.

Диапазон будет преставлять собой массив из двух чисел, которые не обязательно будут в числовом порядке.

Например, если заданы 1 и 3, найдите наименьшее общее кратное как 1, так и 3, которое так же равномерно делится на все числа между 1 и 3. Ответ здесь будет 6.


```javascript
function smallestCommons(arr) {

    const copyArr = [...arr];
    let number = 1;

    copyArr.sort((a, b) => a - b);
  
    function checkNumber (number) {
        for (let i = copyArr[0]; i <= copyArr[1]; i++) {
            if (number % i != 0) {
                return false;
            }
        }
        return true;
    }
  
    while (!checkNumber(number)) {
        number += 1;
    }

    return number;
}
      
      
console.log(smallestCommons([5, 1]));
// return 60
```


## Drop It


Учитывая массив arr, выполните итерацию и удалите каждый елемент, начиная с первого элемента (индекс 0), пока функция ```func``` не вернет ```true```, когда итерационный элемент будет передан через него.

Затем верните остальную часть массива, как только условие будет выполнено, в противном случае ```arr``` должен быть возвращен как пустой массив.

```javascript
function dropElements(arr, func) {

    let newArr = [...arr];

    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return  newArr.slice(index);
        }
        
    }

    return [];
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
// return [3, 9, 2]
```


## Steamroller


Сгладить вложенный массив. Вы должны учитывать различные уровни вложенности.


```javascript
// Мое решение
function steamrollArray(arr) {

    let newArr = [];

    function recurcy (element) {
        element.forEach(num => {

            if (typeof num !== 'object' || num.constructor === Object) {
                newArr.push(num)
            } else {
                recurcy(num)
            }            
        });  
    }
    recurcy(arr)
 
    return newArr;
}
  
console.log(steamrollArray([1, {ololo : 'kek'}, [3, [[4]]]]));
// return - [1, {}, 3, 4]

//Крутое решение из hint
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
```


## Binary agent

Возвращает переведенно на английский язык предложение переданной двоичной строки.

Двиичная строка будет разделена пробелом.

```javascript
function binaryAgent(str) {

    const arr = str.split(' ');
    let binToStr = [];

    for (let i = 0; i < arr.length; i++) {
        binToStr.push(String.fromCharCode(parseInt(arr[i], 2)));
    }
    return binToStr.join("");
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//                     Aren't bonfires fun!?
```


## Всё должно быть правдой


Проверьте, является ли предикат (второй аргумент) истинным для всех элементов коллекции (первый аргумент).

Другими словами, вам предоставляется коллекция массивов объектов. Предикат ```pre``` будет свойством объекта, и вам нужно вернуть ```true```, если его значние истинно. В противном случае возвращает ```false```.

В JavaScript истинные значения - это значения, которые преобразуются в ```true``` при вычислении в логическом контексте.

Помните, что вы можете получить доступ к свойствам объекта с помощью точечной или ```[]``` нотации.


```javascript
//Мое решение
function truthCheck(collection, pre) {

    for (const element of collection) {
        console.log(!element.hasOwnProperty(pre))
        if (!element[pre]) {
            return false;
        }
    }

    return true;
}
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
// return - false
  
// Крутое решение из hint
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}
```


## Необязательыне аргументы


Создайте функцию, котрая суммирует два аргумента вместе. Если указан только один аргумент, то возвращает функцию, которая ожидает один аргумент и возвращает сумму.

Например, ```addTogether(2, 3)``` должен возвращать 5, а ```addTogether(2)``` должен возвращать функцию.

Вызов этой возвращаемой функции с одним аргументом затем вернет сумму:

```var sumTwoAnd = addTogether(2);```

```sumTwoAnd(3)``` вернет ```5```.

Если какой либо аргумент не является допустимым числом, верните undefined.


```javascript
// Мое решение
function addTogether() {
    
    let copyArg = [...arguments];

    for (const iterator of copyArg) {
        if (typeof iterator != 'number') {
            return undefined
        }
    }
    
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        let num = arguments[0];
        return function (arg) {
        
            if (typeof arg != 'number') {
                return undefined
            }
    
            return num + arg
        };
    }
}
  
console.log(addTogether(2 , 3));

// Какое то некст ЛВЛ решение
//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

// test here
addTogether(2, 3);
```


## Make a Person


Заполните конструктор объекта с помощью следующих методов ниже:

```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Запустите тесты, чтобы увидеть ожидаемый результат для каждого метода. Методы, принимающий аргумент, должны принимать только один аргумент, и он должен быть строкой. Эти методы должны быть единственными доступными средствами взаимодествия с объектом.


```javascript
class Person {
    constructor (fullName) {
        this._fullName = fullName;
        this._void1 = '';
        this._void2 = '';
        this._void3 = '';
        this._void4 = '';
        this._void5 = '';
    }

    _validateName(element) {
        if (typeof element != 'string') {
            return false;
        }
        return true;
    }
    
    getFirstName() {

        return this._fullName.split(' ')[0];
    }

    getLastName() {
        return this._fullName.split(' ')[1];
    }

    getFullName() {
        return this._fullName
    }

    setFirstName(first) {
        if (this._validateName(first)) {
            this._fullName = `${first} ${this._fullName.split(' ')[1]}`;
            return 'Success';
        }
        return 'Failure, use the "string" type of data';
    }

    setLastName(last) {
        if (this._validateName(last)) {
            this._fullName = `${this._fullName.split(' ')[0]} ${last}`;
            return 'Success';
        }
        return 'Failure, use the "string" type of data';
    }

    setFullName(fullName) {
        if (this._validateName(fullName)) {
            this._fullName = fullName;
            return 'Success';
        }
        return 'Failure, use the "string" type of data';
    }
}

const bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName('Alisa'));
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.setLastName('Grey'));
console.log(bob.getFullName());
console.log(bob.setFullName('Valera Lubich'));
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
```

Пришлось заполнить конструктор войдами, что бы пройти тест на FCC (там стары синтаксис ООП)


## Map the Debris


Вернуть новый массив, который преобразует среднюю высоту небесных тел в их орбитальные периоды (в секундах).

Массив будет содержать объекты в формате ```{name: 'name', avgAlt: avgAlt}```

Вы можете почитать об орбитальных периодах в [Википедии](https://en.wikipedia.org/wiki/Orbital_period).

Значения должны быть округлены до ближайшего целого числа. Тела находятся на орбите Земли.

Радиус Земли составляет 6367.4447 километров, а велечина GM земли составляет 398600.4418 km ** 3s **-2.


```javascript
function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.reduce((newArr, obj) => {
        newArr.push({ name : obj.name, orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt((earthRadius + obj.avgAlt)**3 / GM))})
        return newArr
    }, [])     
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))

// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
```



