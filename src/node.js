
const name1 = (number1) => {
    // number1 в этой области видимости
    return function name2 (number2) { // функция name1 возвращает тело функции name
        console.log(number1 * number2);
    }
}

const сircuit = name1(2); // теперь в сircuit есть замыкание над областью видимости name1

// смысл в том, что теперь я могу прокинуть эту функцию в любое место кода, но она будет иметь замыканием над той области видимости, где была привязка к name1. Что позволяет получать данные с любого места без загрязнение чужих областей видимости своим дерьмом.
"use strict"
const timer = (i) => setTimeout(() => {
    console.log(i)
}, i * 1000)

for (let i = 1; i <= 5; i++){
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}  
