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
function truncateString(str, num) {
  
  return num < str.length ? `${str.slice(0, num)}...` : str;

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
```





[Вернутся назад](../README.md)