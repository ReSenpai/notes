# Введение в средние задачи алгоритмов


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


