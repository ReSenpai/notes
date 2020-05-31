# Функциональное программирование
[На главную](../README.md)  
1. []()


#

## Вступление

Функциональное программирование следует нескольким основным принципам:
- Функции не зависят от состояния программы или глобальных переменных. Они зависят только от аргументов, переданных в них, чтобы сделать расчет.
- Функции пытаются ограничить любые изменения состояния программы и избежать изменений глобальных объектов, содержащих данные.
- Функции имеют минимальные побочные эффекты в программе.

Подход к разработке программного обеспечения для функционального программирования разбивает программу на небольшие тестируемые части. 

#

Функциональное программирование - это стиль программирования, в котором решения являются простыми, изолированными функциями, без каких либо побочных эффектов за пределами области действия функции.

```INPUT -> PROCESS -> OUTPUT```

Функциональное программирование - это примерно:

1. Изолированные функции - нет зависимости от состояния программы, в которую входят глобальные переменные, подлежащие изменению

2. Чистые функции - один и тот же вход всегда дает один и тот же выход

3. Функции с ограниченными побочными эффеками - любые изменения или мутации состояния программы вне функции тщательно контролируются

```javascript
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

## Понимание терминологии функционального программирования

У команды FCC был пересмотр предпочтений и теперь она хочет 2 вида чая: зеленый чай и черный чай. Общий факт: перепады настроения клиентов довольно распространены.

С этой информацией нам нужно будет вернутся к функции ```getTea``` из предыдущего задания для обработки различных запросов на чай. Мы можем изменить ```getTea```, чтобы принять функцию в качестве параметра, чтобы иметь возможность изменить тип чая, который она готовит. Это делает ```getTea``` более гибким и дает программисту больше контроля при изменении запросов клиента.


Но сначала давайте рассмотрим некоторую функциональную терминологию:

```Callbacks``` это функции, которые перемещаются или передаются в другую функцию, чтобы решить вызов этой функции. Возможно, вы видели, как они передавались другим методам, например в ```filter```, функция обратного вызова сообщает JavaScript критерии для фильтрации массива.

Функции, которые могут быть назначены переменной, переданы в другую функцию или возвращены из другой функции, как и любое другое нормальное значение, называются функциями первого класса. В JavaScript все функции являются функциями первого класса.

Функции, которые принимают функции в качестве аргументов или возвращают функции в качестве возвращаемого значения, называютя функциями высшего порядка.

Когда функции передаются в другую функцию или возвращаются из другой функции, то те функции, которые передаются или возвращаются, могут называтся лямбда.


```javascript
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```


## Понимание опасности использования императивного кода


Функциональное программирование - это хорошая привычка. Это позволяет легко управлять вашим кодом и избавляет вас от подлых ошибок. Но прежде чем мы доберемся до этого, давайте рассмотрим императивный подход к программированию, чтобы выделить, где у вас могут быть проблемы.

В английском (и многих других языках) императивное время используется для передчами команд. Точно так же императивный стиль в программировании - это тот, который дает компьютеру набор операторов для выполнения задач.

Часто операторы изменяют состояние программы, например обновляют глобальные переменные. Класический пример - это цикл ```for```, который дает точные указания для перебора индексов массива.

Функциональное программирование, напротив, является формой декларативного программирования. Вы сообщаете компьютеру, что вы хотите сделать, вызывая метод или функцию.

JavaScript предлагает множество предопределенных методов, которые обрабатывают общие задачи, поэтому вам не нужно писать, как компьютер должен их выполнить. Например, вместо использования цикла ```for```, упомянутого выше, вы можете вызвать метод ```map```, который обрабатывает детали итерации по массиву. Это помогает избежать семантических ошибок, таких как "Off by One Errors", которые были рассмотрены в разделе отладки.

Рассмотрим ситуацию: когда вы просматриваете страницы в интернете в вашем браузере, и хотите отслеживать вкладки, которые вы открыли. Давайте попробуем смоделировать это с помощью простого ООП кода.

Объект Window состоит из вкладок, и обычно открыто несколько Window. Заголовки каждого открытого сайта в каждом объекте Window хранятся в массиве. После работы в браузере (открытие новых вкладок, объединения окон и закрытия вкладок) необходимо распечатать вкладки, которые все еще открыты. Закрытые вкладки удаляются из массива, а новые вкладки (для простоты) добавляются в его конец.

Редактор кода показывает реализацию этой функции с функциями ```tabOpen()```, ```tabClose()``` и ```join()```. Массив ```tabs``` - это часть объекта Window, в котором хранятся имена открытых страниц.


```javascript
let Window = function(tabs) { // конструктор
  this.tabs = tabs; 
};

Window.prototype.join = function (otherWindow) {  // метод join - соединяет массива из табс с массивом, передаваемым в метод
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Пушит в массив новый элемент 'new tab'
  return this;
};

Window.prototype.tabClose = function (index) { // метод закрытия вкладок
  // Only change code below this line
  var tabsBeforeIndex = this.tabs.splice(0, index); // Берет вкладки перед табом
  var tabsAfterIndex = this.tabs.splice(1); // Получает вкладки после таба
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // Only change code above this line
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(`${finalTabs.tabs}
--------------------------------------------------------------------------------------------------
${['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']}`);  
```


## Избегайте мутаций и побочных эффектов с помощью функционального программирования


Если вы еще не поняли этого, проблема в предыдущей задаче заключалась в вызове соединения в функции ```tabClose```. К сожалению ```splice``` изменяет исходный массив, на который он вызывается, поэтому второй вызов к нему использовал модифицированный массив и дал неожиданный результат.


Это небольшой пример гораздо большего шаблона - вы вызываете функцию для переменной, массива или объекта, и функция изменяет переменную или что-то в объекте.


Один из основных принципов функционального программирования заключается в том, чтобы ничего не менять. Изменения приводят к ошибкам. Проще предотвратить ошибки, зная, что ваши функции ничего не меняют, включая аргументы функции или любую глобальную переменную.

В предыдущем примере не было никаких сложных операций, но метод ```splice``` изменил исходный массив и привел к ошибке.

Напомним, что в функциональном программировании изменение или изменение вещей называется мутацией, а результат - называется побочным эффектом. Функция в идеале, должна быть чистой функцией, то есть она не вызывает никаких побочных эффектов.

Давайте попробуем освоить эту дисциплину и не изменять ни одну переменную или объект в нашем коде.


```javascript
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  let result = fixedValue + 1;
  return result;

  // Only change code above this line
}
```


## Передайте аргументы, чтобы избежать внешней зависимости а функции


Последняя задача была на шаг ближе к принципам функционального програмирования, но все же чего-то не хватает. 

Мы не изменили значение глобальной переменной, но функция ```incrementer``` не будет работать без наличия глобальное переменной ```fixedValue```. 

Другой принцип функционального программирования - всегда объявлять свои зависимости явно. Это означает, что если функция зависит от наличия переменной или объекта, то передайте эту переменную или объект непосредственно в функцию в качестве аргумента.

Из этого принципа вытекает несколького хороших следствий. Эту функцию легче проверить, вы точно знаете, какие входные данные она принимает, и она не будет зависеть ни от чего другого в вашей программе.

Это может дать вам больше уверенности, когда вы изменяете, удаляете или добавляете новый код. Вы будете знать, что вы можете или не можете изменить, и вы можете видеть, где находятся потенциальные ловушки.

Наконец, функция всегда будет выдавать один и тот же результат для одного и того же набора входных данных, независимо от того, какая часть кода ее выполняет.


```javascript
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (value) {

  return value + 1
  // Only change code above this line
}
```


## Рефракторинг глобальных переменных из функций


До сих пор мы видели два различных принципа функционального программирования:

1. Не изменяй переменную или объект - создавайте новые переменные и объекты и возвращайте их, если это необходимо, из функции.

2. Объявить аргументы функции - любое вычисление внутри функции зависит только от аргументов, а не от какого-либо глобального объекта или переменной.


Добавление еденицы к числу не очень увлекательно, но мы можем применять эти принципы при работе с массивами или более сложными объектами.


```javascript
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookName, item) {

  let newArr = [...bookName]
  newArr.push(item);

  return newArr;
}

function remove (bookName, item) {

  let newArr = [...bookName];
  var book_index = newArr.indexOf(item);

  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```


## Использование метода map для извлечения данных из массива


И так, мы научились использовать чистые функции, чтобы избежать побочных эффектов в программе. Кроме того, мы видели, что значение функции зависит только от ее входных аргументов.

Это только начало. Как следует из названия, функциональное программирование сосредоточено вокруг теории функций. 

Было бы разумно передать их в качестве аргументов другим функциям и вернуть функцию из другой функции. Функции считаются объектами первого класса в JavaScript, что означает, что они могут использоватся как любой другой объект. Они могут быть сохранены в переменных, сохранены в объекте или переданы в качестве аргументов функции. 

Начнем с некоторых простых функций массива, которые являются методами на прототипе объекта массива. В этом упражнении мы рассматриваем ```Array.prototype.map()```, или просто ```map```.

Метод ```map``` выполняет итерацию по каждому элементу массива и возвращает новый массив, содержащий результаты вызова функции обратного вызова(```callback```) для каждого элемента. Он делает это без изменения исходного массива.

При использовании обратного вызова (callback) ему передаются три аргумента. 

1. Первый аргумент - это текущий обрабатываемый элемент.
2. Второй - это индекс этого элемента.
3. Массив, на котором был вызван метод ```map```.

Ниже приведен пример использования метода ```map``` в массиве ```users``` для возврата нового массива, содержащего только имена пользователей в качестве элементов. Для простоты в примере используется только первый аргумент обратного вызова.

```javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```

<details>
  <summary>Более крутой пример</summary>

```javascript
// The global variable
let watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];


let ratings = watchList.map(element => {
  return {title: element["Title"],  rating: element["imdbRating"]}
})



console.log(JSON.stringify(ratings));
```
</details>



## Реализовать ```map``` на прототипе


Как вы видели из применения ```Array.prototype.map()```, или просто ```map()``` ранее, метод ```map``` возвращал массив той же длины, что и вызываемый. Он также не изменяет исходный массив, пока его функция обратного вызова не работает.

Другими словами, ```map()``` - это чистая функция, и ее выход зависит исключительно от ее входных данных. Кроме того, он принимает другую функцию в качестве аргумента.

Это научит нас многому о ```map```, чтобы попытаться реализовать версию, которая ведет себя точно так же, как и ```Array.prototype.map()``` с циклом ```for``` или ```Array.prototype.forEach```.


Обратите внимание, что чистая функция может изменять локальные переменные, определенные в ее области, хотя предпочтительно также избегать этого.


Напишем свою версию ```map```

```javascript
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let copyArray = [...this]
  let newArray = [];

  copyArray.forEach(element => newArray.push(callback(element)));
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);
```


## используйте метод ```filter``` для извлечения данных из массива


Еще одна полезная функция массива ```Array.prototype.filter()``` или просто ```filter()```.

```filter``` вызывает функцию для каждого элемента массива и возвращает новый массив, содержащий только те элементы, для которых эта функция возвращает ```true```. Другими словами, он фильтрует массив, основываясь на переданной ему функции. Как и ```map```, он делает это без необходимости менять исходный массив.

Функция обрартного вызова принимает 3 аргумента:

1. Первый аргумент - это текущий обрабатываемый элемент.
2. Второй - это индек этого элемент.
3. Массив, на котором был вызван метод фильтра


Ниже приведен пример использования метода ```filter``` в массиве ```users``` для возврата нового массива, содержащего только пользователей в возрасте до 30 лет. Для простоты в примере используется только первый аргумент обратного вызова.


```javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

<details>
  <summary>Более крутой пример</summary>

```javascript
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];


let filteredList = watchList.filter(film => film.imdbRating > 8).map(element => {
  return {title: element["Title"],  rating: element["imdbRating"]}
})

console.log(filteredList);
```
</details>


## Реализовать метод filter на прототипе


Это расскажет нам многое о методе ```filter```, если мы попытаемся реализовать его версию, которая ведет себя точно так же, как и ```Array.prototype.filter()```. Он может использовать либо цикл ```for```, либо  ```Array.prototype.forEach()```.

Обратите внимание, что чистая функция может изменять локальные переменные, определенные в ее области, хотя предпочтительно также избегать этого.


```javascript
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){

  let copyArray = [...this];
  let newArray = [];

  copyArray.forEach(element => {
    if (callback(element)) {
      newArray.push(element)
    }
  });

  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s)
```


## Возвращаем часть массива с помощью метода ```slice```


Метод ```slice``` возвращает копию определенных элементов массива. Он может принимать 2 аргумента:

1. Первый дает индекс того, где начать срез
2. Второй индекс того, где закончить срез (и он не включает себя)

Если аргументы не указаны, то по умолчанию следует начинать с начала массива через конец, что является простым способом сделать копию всего массива. Метод ```slice``` не изменяет исходный массив, но возвращает новый.

Вот такой пример:

```javascript
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

<details>
  <summary>Более крутой пример</summary>

```javascript
function sliceArray(anim, beginSlice, endSlice) {

  return anim.slice(beginSlice, endSlice)
}

let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];


console.log(sliceArray(inputAnim, 1, 3))
console.log(inputAnim)
```

</details>


## Удалить элементы из массива, используя ```slice``` вместо ```splice```


Общая закономерность при работе с массивами, когда вы хотите удалить элементы и сохранить остальную часть массива. JavaScript предлагает метод ```splice``` для этого, который принимает аргументы для индекса, с какого места начать удаление, а затем количество элементов для удаления. Если второй аргумент не указан, по умолчанию элементы удаляются до конца. Однако метод ```splice``` изменяет исходный массив, на котором он вызывается. Вот вам пример:

```javascript
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

Как мы видели в последней задаче, метод ```slice``` не мутирует исходный массив, а возвращает новый, который может быть сохранен в переменную. Напомним, что метод ```slice``` принимает 2 аргумента для индексов, чтобы начать и закончить срез (конец не является инклюзивным), и возвращает эти элементы в новом массиве. Использование метода ```slice``` вместо ```splice``` помогает избежать любых побочных эффектов, связанных с мутацией массива.


```javascript
function nonMutatingSplice(cities) {

  return cities.slice(0, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

console.log(nonMutatingSplice(inputCities))
console.log(inputCities)
```


## Объедините два массива с помощью метода ```concat```


Конкатенация означает соединение элементов из конца в конец. JavaScript предлагает метод ```concat``` для строк и массивов, который работает таким же образом. Для массивов метод вызывается на одном, затем в качестве аргумента для ```concat``` предоставляется другой массив, который добавляется в конец первого массива. Он возвращает новый массив и не мутирует ни один из исходных массивов.

Вот вам пример:

```javascript
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```


## Добавление элементов в конец массива с помощью ```concat``` вместо ```push```

Функциональное программирование - это все о создании и использовании немутирующих функций.

Последняя задача представила метод ```concat``` как способ объединения массивов в новый без изменения исходных массивов. Сравните ```concat``` с методом ```push```. ```push``` добавляет элемент в конец того же массива, на который он вызывается, что изменяет этот массив. 

Пример:

```javascript
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

```concat``` предлагает способ добавления новых элементов в конец массива без каких либо мутирующих побочных эффектов.


```javascript
function nonMutatingPush(original, newItem) {

  return original.concat(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];

nonMutatingPush(first, second);
console.log(nonMutatingPush(first, second))
```


## Используйте метод ```reduce``` для анализа данных





[Вверх]()   
[На главную](../README.md)