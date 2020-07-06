# Введение в бутстрап

Бутстрап - это интерфейсная платформа, используемая для разработки адаптивных веб-страниц и веб-приложений. Он использует mobile-first похдход к веб разработке. Bootstrap включает в себя готовые стили и классы CSS, а также некоторые функции JavaScript. Bootstrap исользует адаптивный макет сетки из 12 столбцов и имеет шаблоны дизайна для:

- buttons
- images
- tables
- forms
- navigation

Чтобы узнать больще об этом и о том, как включать Bootstrap в свои проекты, посетите [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

В этом разделе представлены некоторы способы использования Bootsrap в веб-проектах.


## Использовать адаптивный дизайн с помощью Bootstrap Fluid Containers

В разделе HTML5 и CSS freeCodeCamp мы создали приложение для фотографий кошек. Теперь давайте вернемся к нему. На этот раз мы будем стилизовать его с помощью популярного Bootstrap responsive CSS framework.

Bootstrap определит, насколько широк ваш экран, и ответит, изменив размер ваших HTML - элементов. Отсюда и название адаптивного дизайна.

Благодаря адаптивному дизайну нет необходимости создавать мобильную версию вашего сайта. Он будет хорошо смотрется на устройствах с экранами любой ширины.

Вы можете добавить Bootsrap в любое приложение, добавим следующий код в верхнуюю часть HTML:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

Для начала мы должны влодить весь наш HTML (кроме тега линк и элементов style) в элемент div с классом container-fluid.


```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```

## Сделать изоображение Mobile Responsive

Сперва добавьте новое изообажение ниже существующего. Добавьте в атрибут src - https://bit.ly/fcc-running-cats

Было бы здорово, если бы это изоображение могло быть точно с ширину экрана нашего смартфона.

К счастью, с Bootstrap все что нам нужно сделать, это добавить класс ```img-responsive``` к нашему изоображению. Сделайте это, и изоображение должно идеально соответствовать ширине вашей страницы.


```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <img class="img-responsive" src="https://bit.ly/fcc-running-cats" alt="A cute orange cat lying on its back.">

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```


## Центрирование текста с Bootstrap

Теперь, когда мы используем Bootsrap, мы можем центрировать наш элемент заголовка, что бы он выглядел лучше. Все, что нам нужно сделать, это добавить класс ```text-center``` к нашему заголовку ```h2```.

Помните, что вы можете добавить несколько классов к одному элемент, разделив каждый из них пробелом.

```html
<h2 class="red-text text-center">your text</h2>
```


## Создание Bootstrap button


Bootstrap имеет свои собственные стили для элементов кнопок, которые выглядят намного лучше, чем дефолтные.

Создайте новый элемент кнопки под вашей большой фотографией котенка. Дайте ему классы ```btn``` и ```btn-default```, а также текст "Like".

```html
<button class="btn btn-default">Like</button>
```


## Create a Block Element Bootstrap Button


Как правило, ваши элементы ```button``` с классами ```btn``` и ```btn-default``` имеют только ширину текста, который они содержат.

Сделав их блочными элементами с дополнительным классом ```btn-block```, ваша кнопка растянется, чтобы заполнить всё горизонтальное пространство вашей страницы, и любые элементы, следующие за нй, будут перетекать в "Новую строку" по блоком.

```html
<button class="btn btn-default btn-block">Submit</button>
```

Эта кнопка займет 100% доступной ширины.

Обратите внимание, что эта кнопка по прежнему нуждается в классе ```btn```.



## Попробуйте кнопку bootstrap - цвета радуги


Класс ```btn-primary``` - это основной цвет, который вы будете использовать в своем приложении. Это полезно для выделения действий, которые вы хотите, чтобы ваш пользователь сделал.

Замените класс ```btn-default``` на ```btn-primary``` в ващей кнопке.

Обратите внимание, что эта кнопка по прежнему будет нуждатся в классах ```btn``` и ```btn-block```.

```html
<button class="btn btn-primary btn-block">Like</button>
```


## Вызывайе дополнительные действия с помощью btn-info

Bootstrap поставляется с несколькими предопределенными цветами для кнопок. Класс ```btn-info``` используется для привлечения внимания к необязательным действиям, которые может предпринять пользователь. 

Создайте новую кнопку Bootstrap уровня блока под вашей кнопкой "Like" с тего "info" и добавьте в нее классы ```btn-info``` и ```btn-block```.

Обратите внимание, что эти кнопки по прежнему нуждаются в классах ```btn``` и ```btn-block```.


```html
<button class="btn btn-block btn-info">Info</button>
```


## Предупредите своих пользователе об опасном действии с помощью btn-danger


Бутстрап поставляется с несколькими предопределенными цветами для кнопок. Класс ```btn-danger``` - это цвет кнопки, который вы будете использовать для уведомления пользователей о том, что кнопка выполяет деструктивное действие, например удаление фотографии кошки. 

Создайте кнопку с текстом "Delete" и назначьте ей класс ```btn-danger```.

Обратите внимание, что эти кнопки по прежнему нуждаются в классах ```btn``` и ```btn-block```.


```html
<button class="btn btn-block btn-danger">Delete</button>
```


## Используйте сетку Bootstrap для размещения элементов рядом друг с другом

Bootstrap использует адаптивную систему сетки из 12 столбцов, которая позволяет легко помещать элементы в строки и указывать относительную ширину каждого элемента. Большинство классов Bootstrap могут быть применены к элементу div.

Bootstrap имеет различные атрибуты ширины столбца, которые он использует в зависимости от ширины экрана пользователя. Например, телефоны имеют узкие экраны, а ноутбуки имеют более широки экраны.

Возьмем, например, класс бутстрап ```col-md-*```. Здесь ```md``` среднее значение, а ```*``` это число, указывающее, сколько столбцов в ширину элемента должно быть. В этом случае задается ширина столбца элемента на экране среднего размера, например ноутбука.

В приложении Cat Photo, которое мы создаем, мы будем использовать ```col-xs-*```, где ```xs``` означает очень маленький (например, очень маленький экран смартфона), а ```*``` - это количество столбцов, определяющее, сколько столбцов должно быть в ширину элемента.

Поместите кнопки Like, Info, Delete рядом с друг другом, вложив все три из них в один элемент ```<div class="row">```, а затем каждый из них в элемент ```<div class="col-xs-4">```.

Класс ```row``` применяется к ```div```, и сами кнопки могут быть вложены в него.

```html
<div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
</div>
```


## Бросить кастомный CSS для Bootstrap

