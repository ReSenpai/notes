

## Palindrome Checker

Возвращает ```true```, если данная строка является палиндромом. В противном случае возвращает ```false```.

Палиндром - это слово или предложение, которое пишется одинаково как вперед, так и назад, игнорируя знаки препинания, регистр и интервал.

Внимание
Вам нужно будет удалить все не буквенно-цифровые символы (знаки препинания, пробелы и символы) и превратить все в один и тот же регистр (нижний или верхний регистр), чтобы проверить наличие палиндромов.

Мы будем передавать строки с различными форматами, такими как ```"racecar"```, ```"RaceCar"```, и ```"raceCAR"``` среди прочего.

Мы также будет передавать строки с специальными символами, такие как ```"2A3*3a2"```, ```"2A3 3a2"``` и ```"2_A3*3#A2"```.


```javascript
function palindrome(str) {

    let copyStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase();

    return copyStr == copyStr.split('').reverse().join('') ? true : false;
}
  
console.log(palindrome("!23eye__32#"));
```


## Конвертер римских цифр


Преобразовать данное число в римскую цифру.

Все римские цифры должны быть в верхнем регистре.


```javascript
// Мое решение
function convertToRoman(num) {

    const romanNumber = {
        1: 'I', 10: 'X', 100: 'C', 1000: 'M', 
        2: 'II', 20: 'XX', 200: 'CC', 2000: 'MM',
        3: 'III', 30: 'XXX', 300: 'CCC', 3000: 'MMM',
        4: 'IV', 40: 'XL', 400: 'CD', 4000: 'MMMM',
        5: 'V', 50: 'L', 500: 'D', 5000: 'MMMMM',
        6: 'VI', 60: 'LX', 600: 'DC', 6000: 'MMMMMM',
        7: 'VII', 70: 'LXX', 700: 'DCC', 7000: 'MMMMMMM',
        8: 'VIII', 80: 'LXXX', 800: 'DCCC', 8000: 'MMMMMMMM', 
        9: 'IX', 90: 'XC', 900: 'CM', 9000: 'MMMMMMMMM'   
    }

    let copyNum = (num + '').split('').reverse();
    let newArr = [];
    let result = '';

    function addNull(number, index) {

        if (number == 0) {
            return;
        }

        for (let i = 0; i < index; i++) {
            number += '0';          
        }
        newArr.unshift(number);
    }

    for (let index = 0; index < copyNum.length; index++) {
        addNull(copyNum[index], index);    
    }

    for (const iterator of newArr) {
        result += romanNumber[iterator];
    }

    return result;
}
   
console.log(convertToRoman(9));

//Крутое решение в хинтах
const convertToRoman = function(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let romanized = "";

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);
```

## Шифр цезаря


Одним из самых простых и широко известных шифров является шифр Цезаря, также известный как шифр сдвига. В шифре сдвига значения букв сдвигаются на некоторую заданную величину.

Распространенным современным применением является шифр ROT13, где значения букв смещены на 13 позиций. Таким образом 'A' ↔ 'N', 'B' ↔ 'O' и так далее.

Напишите функцию, которая принимает кодированную строку [ROT13](https://en.wikipedia.org/wiki/ROT13) в качестве входных данных и возвращает декодированную строку.

Все буквы будут в верхнем регистре. Не преобразовывайте никакие неалфавитные символы (например проблемы, знаки препинания), но передавайте их дальше.


```javascript
//Мое решение
function rot13(str) {

    const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    let copyStr = str.toLowerCase().split('');
    let result = '';

    function calc(num) {
        if (num > 12) {
            return num - 13;  
        }
        return num + 13;
    }

    for (const iterator of copyStr) {   

        let symbol = iterator;
        if (/[a-z]/.test(iterator)) {
            symbol = Alphabet[calc(Alphabet.indexOf(iterator))];
        }
        result += symbol;
    }

    return result.toUpperCase();
}
  
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

//Крутое решение в хинтах

function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
```


## Валидатор телефонных номеров

Возвращает ```true```, если переданная строка выглядит как действительный номер телефона США.

Пользователь может заполнить поле формы любым способом, который он выберет, если он имеет  формат действительного номера США. Ниже приведены примеры допустимых форматов для американских номеров:

```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

Для этого испытания вам будет предоставлена строка, например ```800-692-7753``` или ```8oo-six427676;laskdjf```. Ваша задача состоит в том, чтобы подтвердить или отклонить американский телефонный номер на основе любой комбинации форматов, указанных выше.

Требуется код города. Если указан код страны, необходимо подтвердить, что код страны равен 1. Возвращает ```true```, если строка является допустимым номером телефона США, в противном случае вернет ```false```.


```javascript
// Мое решение
function telephoneCheck(str) {
    //regex for USA phone number
    return /^1*\s*\d{3,3}[\-\s]*\d{3,3}[-\s]+\d{4,4}$|^\d{10,10}$|^1*\s*\(\d{3,3}\)\s*\d{3,3}[-\s]+\d{4,4}$/.test(str);
}

console.log(telephoneCheck("1 555)555-5555"));

// Более компактная регулярка в хинтах
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
```


## Cash Register


Создайте функцию кассового аппарат ```checkCashRegister()```, которая принимет цену покупки в качестве первого аргумента (```price```), оплату в качестве второго аргумента (```cash```) и наличные деньги в кассе (```cid```) в качестве третьего аргумента. 

```cid``` - это 2D - массив, перечисляющий доступную валюту.

Функция ```checkCashRegister()``` всегда должна возвращать объект с ключом ```status``` и ключом ```change```.

Верните ```{status: "INSUFFICIENT_FUNDS", change: []} ```  если  cash-in-drawer (```cid```) меньше, чем сдача, или если вы не можете вернуть точную сдачу.

Верните ```{status: "CLOSED", change: [...]}``` с  cash-in-drawer (```cid```) в качестве значения для ```change``` ключа, если оно равно изменению, причитающемуся.

В противном случае верните ```{status: "OPEN", change: [...]}``` с изменением, причитающимся в монетах и купюрах, отсортированных в порядке от высшего к низшему, как значение ключа изменения.

Currency Unit	    Amount
Penny	            $0.01 (PENNY)
Nickel	            $0.05 (NICKEL)
Dime	            $0.1 (DIME)
Quarter	            $0.25 (QUARTER)
Dollar	            $1 (ONE)
Five Dollars	    $5 (FIVE)
Ten Dollars	        $10 (TEN)
Twenty Dollars	    $20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

Ниже приведен пример массива ```cash-in-drawer```:
```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```



