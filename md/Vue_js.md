## Vue.js

### Создание простого Vue приложения

* ```el: '#idName'``` - Указываем id элемента, с которым хотим работать
* ```data: {}``` - объект с переменными 
* ```<h1> Hello {{ name }}</h1>``` - переменная помещается в нужный нам селлектор при помощи интерполяции ```{{ }}```
* ```<input type="text" v-on:input="changeName">``` - деректива ```v-on``` ставит обработчик событий на элемент, затем идет указание события прослушивания, в данном случае ```:input```. Значением атрибута мы указываем метод, который будет отвечать за изменения данного элемента - ```="changeName"```
* ```methods: { }``` - поле в конфигурации Vue отвечающая за создание методов

В примере ниже мы поставили на прослушку наш input. В итоге всё что будет написано в input - будет сразу отображатся в h1 после Hello

```html
<div id="idName">
    <input type="text" v-on:input="changeName">
    <h1>Hello {{ name }}</h1>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
            name: 'Vue'
        },
        methods: {
            changeName: function(event) {
                this.name = event.target.value
            }
        }
    })
</script>
```

### Интерполяция

Всё что мы пишем внутри ```{{ }}``` - уже является javascript -ом

* Внутри ```{{ }}``` мы можем писать простые javascript выражения, которые будут обрабатыватся. 
* Так же мы можем вызывать функцию через интерполяцию, как в примере ниже ```{{ sayHello() }}```
* Мы можем записывать внутрь простые тернарные выражения ```{{ isOk ? 'I am Ok' : 'I am not Ok!' }}```
* И использовать javascript методы ```{{ string.split('').reverse().join('') }}```

```html
<div id="idName">
    <h1>String: {{ name }}</h1>
    <h1>Sun: {{ 10 + 60 }}</h1>
    <h1>Number: {{ number }}</h1>
    <h1>Method: {{ sayHello() }}</h1>
    <h1>If statement: {{ isOk ? 'I am Ok' : 'I am not Ok!' }}</h1>
    <h1>Functions: {{ string.split('').reverse().join('') }}</h1>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
            name: 'Vue',
            number: 100,
            isOk: true,
            string: 'Say my name'
        },
        methods: {
            sayHello: function() {
                return 'I am function'
            }
        }
    })
</script>
```


### Динамические атрибуты

Для подстановки значений в атрибуты селлекторов мы не можем просто так взять и написать туда переменную через интерполяцию ~~```<a href="{{ url }}">Nice video</a>```~~ , это просто выдаст ошибку при компиляции.
Поэтому для таких случаев в vue существует директива ```v-bind:```, после ```:``` мы указываем на какой именно атрибут мы хотим использовать бинд.
Стоит отметить, что все что будет идти в свойствах директивы(после ```:```) - будет считатся javascript-ом, поэтому всё описанное выше так же применимо и тут.

```html
<div id="idName">
    <h2>
        <a v-bind:href="url">Nice video</a>
    </h2>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           url: 'https://www.youtube.com/watch?v=DxjH44mofek'
        }
    })
</script>
```

### Вывод HTML кода

Вывод HTML кода осуществляется при помощи директивы ```v-html="varName"```. Если вы просто попытаетесь вывести html код через интерполяцию, то на выходе получите всё строкой: ~~```{{ link }}```~~

```html
<div id="idName">
    <h2 v-html="link"></h2>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           link: '<a href="https://www.youtube.com/watch?v=DxjH44mofek">Nice video</a>'
        }
    })
</script>
```

### Добавление событий

* ```v-on:click="methodName"``` - добавление обработчика событий на клик мыши. В примере ниже мы добавили прослушку события клика на элементе ```button``` и с его помощью активируем функцию на увеличение ```counter```.
* Во втором примере с ```counter2``` мы добавили код функции во внутрь директивы, что тоже приемлемо с простыми функциями.
* ```v-on:mouseover="methodName"``` - обработчик события наведения мыши на элемент. В примере ниже мы применили эту директиву к элементу ```h2``` счетчика 2. При наведении мыши данный элемент будет менять цвет на красный.

```html
<div id="idName">
    <h2>Счетчик = {{ counter }}</h2>
    <button v-on:click="riseCounter">Увеличить</button>

    <hr>

    <h2 v-on:mouseover="onHover">Счетчик 2 = {{ counter2 }}</h2>
    <button v-on:click="counter2++">Увеличить</button>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           counter: 0
        },
        methods: {
            riseCounter: function() {
                this.counter++
            },
            onHover: function(event) {
                event.target.style.color = 'red'
            }
        }
    })
</script>
```

### Передача параметров в метод

Когда мы хотим передать параметры в нашу функцию, то мы делаем это так же, как и в нативном javascript-е - внутри скобочек ```( )```.
* Стоит так же отметить, если мы хотим получить сам объект события, то в качестве дополнительного аргумента функции можно использовать ```event```. 
Но уже при вызове функции, что бы обозначить Vue.js что мы передаем так же нативный объект события, нужно использовать специальное зарезервированое имя в синтаксисе Vue.js - ```$event```.

```html
<div id="idName">
    <h2>{{ title }} = {{ counter }}</h2>
    <button v-on:click="riseCounter(5, 'Изменено на 5', $event)">Увеличить на 5</button>
    <button v-on:click="riseCounter(10, 'Изменено на 10', $event)">Увеличить на 10</button>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           counter: 0,
           title: 'Счетчик'
        },
        methods: {
            riseCounter: function(num, str, event) {
                this.counter += num
                this.title = str

                if(num === 5) {
                    event.target.style.color = 'blue'
                } else if (num === 10) {
                    event.target.style.color = 'red'
                }
            }
        }
    })
</script>
```

### Модификаторы событий

Модификаторы можно применять по несколько штук за раз, друг за другом.

* ```v-on:click.prevent``` - синтаксис написания модификаторов в Vue.js
* ```.prevent``` - модификатор события, который отменяет стандартное поведение элемента
* ```.stop``` - прекращает дальнейшую передачу текущего события. В примере ниже мы использовали этот модификатор на теге ```span```. Теперь когда мышь будет находится в зоне этого модификатора, функция по выводу координат мыши не будет отрабатывать.
* ```.enter``` - ```v-on:keyup.enter``` будет отрабатывать функции при нажатии на Enter. Одна из разновидностей модификатора на события клавиатуры. Модификаторов на кейкоды много - более подробно в документации по [Vue](https://ru.vuejs.org/v2/guide/events.html#Модификаторы-клавиш)

```html
<div id="idName">
    <h2>
        <a href="http://google.com" target="_blank" v-on:click.prevent="">Google</a>
    </h2>
    <h2 v-on:mousemove="handleMouseMove">
        x: {{ x }} \ Y: {{ y }}

        <span v-on:mousemove.stop="">Не изменять</span>
    </h2>

    <hr>

    <input type="text" v-on:keyup.enter.space="alertValue">
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           x: 0,
           y: 0
        },
        methods: {
            handleMouseMove: function(event) {
                this.x = event.clientX
                this.y = event.clientY
            },
            alertValue: function(event) {
                alert(event.target.value)
            }
        }
    })
</script>
```

### Ярлыки для директив

Если проще, ярлыки директив - это сокращения часто используемых директив.

* ```:``` - сокращение директивы ```v-bind:```
* ```@``` - сокращение директивы ```v-on:```

```html
<div id="idName">
    <h2>
        <a :href="url">Nice video</a>
    </h2>

    <h2>
        Counter: {{ counter }}
    </h2>

    <button @click="counter++">Rise</button>
</div>

<script>
    new Vue({
        el: '#idName',
        data: {
           url: 'https://www.youtube.com/watch?v=DxjH44mofek',
           counter: 0
        }
    })
</script>
```

[Вернутся назад](../README.md)