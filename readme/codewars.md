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



[Вверх]()   
[На главную](../README.md)