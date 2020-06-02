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


```javasccript
