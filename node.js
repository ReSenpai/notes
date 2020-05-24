
// console.log( ({}).prototype === ({}).__proto__ ) //false

// function ITkamasutra() {}
// console.log( ITkamasutra.prototype === ITkamasutra.__proto__ ) // false

// function ITincubator() {}
// console.log(ITincubator.prototype === ITkamasutra.prototype) // false
// console.log(ITincubator.__proto__ === ITkamasutra.__proto__) // true



// let Component = (props) => {
//   return `olololo`
// }
// console.log(Component.prototype === Object.prototype) // false



// let age = 18
// console.log(age.prototype === Number.prototype) // false
// console.log(age.__proto__ === Number.prototype) //true


// class Hacker {}
// console.log(Hacker.__proto__ === Function.prototype) //true



// console.log(ITincubator.__proto__) //function
// console.log(age.__proto__) //number

/* 
1. false
2. false
3. false
4. true
5. false
6. false
7. true
8. true
9. function
10. number
*/


class Samurai {
  constructor(name) {
    this.name = name
  }
  hello() {
    alert(this.name)
  }
}

let shogun = new Samurai('Re Senpai')
console.log(shogun.__proto__.__proto__ === Samurai.prototype.__proto__)
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype)
console.log(shogun.__proto__.__proto__.__proto__ === null)
debugger