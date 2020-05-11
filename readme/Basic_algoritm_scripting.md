## Базовые алгоритмы скриптов

### Перевод Цельсия в Фаренгейты


```javascript
function convertToF(celsius) {

  let fahrenheit = (celsius * (9/5) ) + 32;

  return fahrenheit;
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


### Подтвердить окончание




[Вернутся назад](../README.md)