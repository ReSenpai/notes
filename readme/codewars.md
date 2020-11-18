# Решенные задач с codewars
[На главную](../README.md)  
1. []()


#


## 5 kyu

### [Сокращение направление](https://www.codewars.com/kata/550f22f4d758534c1100025a)


```javascript

function dirReduc(arr){
    
    const W = /west/i
    const E = /east/i
    const S = /south/i
    const N = /north/i

    let myArr = [...arr];

    cycle();
    
    function cycle() {

        for (let i = 0; i < myArr.length; i++) {
            if (W.test(myArr[i]) && E.test(myArr[i + 1])) {
                myArr.splice(i, 2)
                cycle()
            }
            if (E.test(myArr[i]) && W.test(myArr[i + 1])) {
                myArr.splice(i, 2)
                cycle()
            }
            if (S.test(myArr[i]) && N.test(myArr[i + 1])) {
                myArr.splice(i, 2)
                cycle()
            }
            if (N.test(myArr[i]) && S.test(myArr[i + 1])) {
                myArr.splice(i, 2)
                cycle()
            }
        }
    }

    return myArr;
}

// W<->E or S<->N side by side

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
```

## 6 kyu

### [Подсчет дубликатов](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)

```javascript
const duplicateCount = (text) => {

    let result = 0;
    const symbolRepeatsObj = {};
    const symbolArray = text.toLowerCase().split('');

    symbolArray.forEach(symbol => symbolRepeatsObj[symbol] = (symbolRepeatsObj[symbol] || 0) + 1);

    Object.keys(symbolRepeatsObj).forEach(item => symbolRepeatsObj[item] > 1 && result++)

    return result;
}
console.log(duplicateCount("Indivisibilities")); // 2
```

Крутое решение в хинтах.

```javascript
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
```


### [Энкодер дубликатов](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript)

Мое полурешение на регулярках
```javascript
const duplicateEncode = (word) => {
    const createTestRegex = (regex) => regex.test(word) ? ')' : '(';

    return word.split('').map(symbol => {
        if (/\(|\)/.test(word)) {
            const regex = new RegExp(`\\${symbol}.*\\${symbol}`, 'i');
            return createTestRegex(regex);
        } 
        
        const regex = new RegExp(`${symbol}.*${symbol}`, 'i');
        return createTestRegex(regex);
    }).join('');
}

console.log(duplicateEncode(")) @("))
```

Крутое решение

```javascript
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
```



[Вверх]()   
[На главную](../README.md)