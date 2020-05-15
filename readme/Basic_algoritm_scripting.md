## Базовые алгоритмы

### Перевод Цельсия в Фаренгейты


```javascript
function convertToF(celsius) {

  return (celsius * (9/5) ) + 32;

}

convertToF(30);
```


### Реверс строки


```javascript
function reverseString(str) {

  return str.split("").reverse().join(""); 
}

reverseString("hello");
```


### Факторизировать число


```javascript
function factorialize(num) {

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i
  }

  return result
}

factorialize(5);
```


### Найти самое длинное слово в строке


```javascript
function findLongestWordLength(str) {

  const wordArr = str.split(' ');
  let result = 0;

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > result ) {
      result = wordArr[i].length
    }
  }

  return result;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
```


### Вернуть наибольшее число в массиве

Здесь нужно было пройтись по каждому массиву 2 уровня и найти в нем наибольшее число. Затем составить из этих чисел новые массив и вывести его в результат.

```javascript
function largestOfFour(arr) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]))
  }
  
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
```


### Проверить наличие окончания


```javascript
function confirmEnding(str, target) {

  const regex = new RegExp(target + '$', 'i');

  return regex.test(str);
}

confirmEnding("Bastian", "n");
```


### Повторить строку


```javascript
function repeatStringNumTimes(str, num) {

  let result = ''

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3));
```


### Обрезание строки


```javascript
function truncateString = (str, num) => {
  
  return num < str.length ? `${str.slice(0, num)}...` : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
```


### Искатель сокровища


```javascript
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  } 
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
```


### Провека на тип данных


```javascript
function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

booWho(null);
```


### Преобразование слов в предложении


```javascript
// Украл в интернетах прикольное решение

function titleCase(str) {

  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  }
)

}

console.log(titleCase("I'm a little tea pot"));
```


```javascript
// Чисто мой код

function titleCase(str) {

  const wordsArr = str.split(' ');
  let result = '';

  for (let i = 0; i < wordsArr.length; i++) {
    i === 0 ? result += wordsArr[i][0].toUpperCase() : result += ` ${wordsArr[i][0].toUpperCase()}`
    result += wordsArr[i].slice(1).toLowerCase()
  }

  return result;
}

console.log(titleCase("I'm a little tea pot"));
```


### Нарезать и соединить


```javascript
function frankenSplice(arr1, arr2, n) {

  let result = [...arr2]

  result.splice(n, -1, ...arr1)

  return result
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
```


### Вышибала ложных значений


```javascript
// мое решение

function bouncer(arr) {

  let myArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      myArr.push(arr[i])
    }
  }

  return myArr
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
```


```javascript
// некст лвл

function bouncer(arr) {
  return arr.filter(Boolean);
}
```


### Где мое место?


```javascript
function getIndexToIns(arr, num) {

  arr.push(num)
  arr.sort(function(a, b) {
    return a - b;
  });

  return arr.indexOf(num)
}

console.log(getIndexToIns([2, 5, 10], 15));
```


### 



[Вернутся назад](../README.md)