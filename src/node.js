
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const input = document.querySelector('.value').value;
    console.log(input)
})


// var fullname = 'Mark Ivanov';

// var obj = {
//     fullname: 'Joe Milner',
//     prop: {
//         fullname: 'David Smith',
//         getFullname: function () {
//             return this.fullname;
//         }
//     }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test());

/**
 * 1.  1
 * 2. 10
 * 3. undefined
 * 4. Double
 * 5. undefined
 * 6. Выведет - xyz Мы создаем экземпляр объекта и в качестве прототипа указывает объект Employee. Далее мы пытаемся удалить у объекта emp1 свойство company, но поскольку этого свойства нет в объекте emp1, то это не оказывает никакого эффекта. И в конце мы выводим в консоли свой company, объекта emp1. Движок сначала ищет это свой внутри объекта emp1, но не находит и спускается ниже по цепочке прототипов, пока свойство не будет найдено или мы не дойдем до Object.prototype, где поиск закончится неудачей. В данном слуае мы найдем это свой в первом же прототипе и выведем его значение в консоли.
 * 7. bar got called something
 * 8. for (var i = 1; i < 11; i++) {
    function timer(num) {
        setTimeout(function() {
            console.log(num)
        }, 1000 * num)
    }
    timer(i)
}  
 * 9. var p = $('body > div:nth-child(2) > p:nth-child(3)');
 * 10. var pOnlyNum = $('p').filter(function() {
            return this.textContent.match(/^\d+$/g);
        })
 * 11. В данном случае подойдет вот такая функция: function getCardId(card) {     return card.match(/\d{4,16}$/g) }
 * 12. let newArray = array.map(num => num * 2);
 * 13. let newArray = array.map(user => user.name);
 * 14. let newArray = array.filter(num => num < 5);
 * 15. В логике функции withdrawAmountBy мы вызываем метод deductAmount объекта fooAccount, но при помощи метода call подставляем этому методу область видимости объекта barAccount.
Вторым аргумент в методе call идет аргумент для withdrawAmountBy, то есть amount.
Сам метод deductAmount хоть и создан в объекте fooAccount, в качестве уменьшаемого и возвращаемого значения использует this.amount, который берет контекст области видимости в зависимости от того где и как был вызван этот метод (присуще поведение динамической области видимости).
Метод call во всей этой цепочке как раз и определяет для this текущую область видимости, из которой он возьмет amount.
Задача метода deductAmount - вычитать из общего amount определенную сумму и затем возвращать текущее значение amount.
 
Именно поэтому при вызове метода withdrawAmountBy(400) значение уменьшается у объекта barAccount и уменьшается на 400. И во всех последующих вызовах уменьшается на задаваемое значение.
 * 16. 
 */

 // Код вернет [2, NaN, NaN, 2], потому что parseInt принимает 2 аргумента. 
// 1 - это значение, которое необходимо проинтерпретировать, а второй - систему счисления
// При этом метод map отдает parseInt в качестве первого аргумента текущий элемент, а в качестве второго - индекс этого элемента в массиве.