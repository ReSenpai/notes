
## Парсим что то в массив и сортируем


```javascript
function converToArray(json) {
  
  let arr = [];

  json.forEach(element => {
    arr.push(element.Surname);
  });

  return arr.sort()
}

fs.writeFile('./arr_surname.json', JSON.stringify(converToArray(surnameObj) , null, 2),(err) => {
  if(err) console.log(err);
});
```




## Сортируем массив

```javascript
function selectionSort(arr) {
  newArr = [];
  counter = arr.length;
  for (let i = 0; i < counter; i++) {
    smallest = findSmallest(arr);
    newArr.push(...arr.splice(smallest, 1))
  }
  return newArr;
}


fs.writeFile('./sort_arr_name.json', JSON.stringify(dataName.sort() , null, 2),(err) => {
  if(err) console.log(err);
});
```


## Замеряем вермя работы

```javascript
console.time('linear search')
console.log(linearSearch(dataName, 'Евгений'))
console.timeEnd('linear search')
```


## Линейный поиск

```javascript
function linearSearch(arr, item) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      console.log(`Прошло ${i} итераций`)
      return `Твоя херня вот тут ${i}`
    }
  }
  console.log(`Прошло ${i} итераций`)
  return `тут нихера нет`
}
```


## Бинарный поиск

```javascript
function binarySearch(arr, item) {

  let start = 0;
  let end = arr.length - 1;
  let counter = 0;

  while (start <= end) {
    let mid = Math.round((start + end) / 2)
    let guess = arr[mid]
    counter += 1;
    if (guess == item) {
      console.log(`Прошло ${counter} итерации`)
      return mid
    } else if (guess > item) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  console.log(`Прошло ${counter} итерации`)
  return 'тут нихера нет'
}
```


## Тестирование алгоритмов


```javascript
const sortDataName = require('./sort_arr_name.json');
const dataSurname = require('./arr_surname.json');

const fs = require('fs');

function binarySearch(arr, item) {

  let start = 0;
  let end = arr.length - 1;
  let counter = 0;

  while (start <= end) {
    let mid = Math.round((start + end) / 2)
    let guess = arr[mid]
    counter += 1;
    if (guess == item) {
      // console.log(`Прошло ${counter} итерации`)
      return `binary Searsh| Итем найден под индексом ${mid}`
    } else if (guess > item) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  // console.log(`Прошло ${counter} итерации`)
  return 'тут нихера нет'
}

function linearSearch(arr, item) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      // console.log(`Прошло ${i} итераций`)
      return `Linear Searsh| Итем найден под индексом ${i}`
    }
  }
  // console.log(`Прошло ${i} итераций`)
  return `тут нихера нет`
}


function testAlgoritms(algoritm, arr, iteration, itemCheck) {

  let average = 0;

  for (let i = 0; i < iteration; i++) {
    
    let index;

    if (itemCheck === undefined) {
      index = Math.ceil((Math.random() * arr.length) - 1);
      item = arr[index];
      console.log(`Проверяем имя ${item}, под индексом ${index}`)
    } else {
      index = itemCheck;
    }

    const start = new Date().getTime();
    console.log(algoritm(arr, item));
    const end = new Date().getTime();
    average += end - start;
  }

  return average / iteration;
}


function сomparisonAlgoritm(first, second, iteration) {
  
  console.log(`Проведено ${iteration} итераций каждого алгоритма`)
  console.log(`Средний показатель 1 алгоритма ${first} ms`)
  console.log(`Средний показатель 2 алгоритма ${second} ms`)

  if (first < second) {
    console.log(`1 алгоритм быстрее 2 на ${((second - first) / first) * 100} %`)
  } else {
    console.log(`2 алгоритм быстрее 1 на ${((first - second) / first) * 100} %`)
  }
}


let cycles = 100
const start = new Date().getTime();
сomparisonAlgoritm(testAlgoritms(binarySearch, dataSurname, cycles), testAlgoritms(linearSearch, dataSurname, cycles), cycles)
const end = new Date().getTime();
console.log(`Общее время теста: ${(end - start) / 1000} sec`)
```