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
Поэтому для таких случаев в vue существует директива ```v-bind:```, после ```:``` мы указываем, на какой именно атрибут мы хотим использовать бинд.
Стоит отметить, что все что будет идти в свойствах директивы(после :) - будет считатся javascript-ом, поэтому всё описанно выше так же применимо и тут.

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

[Вернутся назад](../README.md)