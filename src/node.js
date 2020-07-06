/**
 * 1. Принимает цену продукта в 1 аргументе
 * 2. Оплату в 2 аргументе
 * 3. Сколько денег в касе - 3 аргумент
 * 4. cid - это 2Д массив, перечисляющий доступную валюту
 * 
 * 5. Верните:
 *              1. {status: "INSUFFICIENT_FUNDS", change: []} если cid меньше чем сдача
 *              2. {status: "CLOSED", change: [...]} с cid в качестве значения для change если оно ровно причитающемуся изменению
 *              3. {status: "OPEN", change: [...]} в других случаях с изменением, причитающимся в монетах и купюрах, отсортированных в порядке от высшего к низшему, как значение ключа изменения
 * 
 * 
 * 1. Считем сумму cid
 */


function checkCashRegister(price, cash, cid) {
    
    const moneyTable = {
        'PENNY'      : { value: 0.01 },
        'NICKEL'     : { value: 0.05 },
        'DIME'       : { value: 0.1  },
        'QUARTER'    : { value: 0.25 },
        'ONE'        : { value: 1    },
        'FIVE'       : { value: 5    },
        'TEN'        : { value: 10   },
        'TWENTY'     : { value: 20   },
        'ONE HUNDRED': { value: 100  }
    }

    let change = cash - price
    console.log(change)

    
    let amountCash = cid.reduce((accum, item) => {
        moneyTable[item[0]].quantity = Math.ceil(item[1] / moneyTable[item[0]].value)
        moneyTable[item[0]].cash = item[1]
        return accum += item[1] 
    }, 0).toFixed(2)
    const reverseCid = cid.reverse()

    if (result == change) return {status: "CLOSED", change: cid}
    if (result < change) return {status: "INSUFFICIENT_FUNDS", change: []}

    console.log(moneyTable)


    cheker(result)

    const reverseCid = cid.reverse()
    const superResult = reverseCid.reduce((accum, item) => {

        let result2 = 0

        function getMoney() {
            if (moneyTable[item[0]].value > change && moneyTable[item[0]].quantity > 0) {
                result = (result - moneyTable[item[0]].value).toFixed(2)
                cheker(result)
            }
            if (moneyTable[item[0]].value <= change && moneyTable[item[0]].quantity > 0) {
                result2 += moneyTable[item[0]].value
                moneyTable[item[0]].quantity -= 1
                change -= moneyTable[item[0]].value
                result = (result - moneyTable[item[0]].value).toFixed(2)
                
                cheker(result)
                getMoney()
            }
            console.log(result)
            return accum
            
        }
        getMoney()
        if (result2) accum.change.push([item[0], result2])
        return accum
    }, {status: "OPEN", change: []})
    
    return superResult
}
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

/**
 * {status: "OPEN", change: [
 * ["TWENTY", 60], 
 * ["TEN", 20], 
 * ["FIVE", 15], 
 * ["ONE", 1], 
 * ["QUARTER", 0.5], 
 * ["DIME", 0.2], 
 * ["PENNY", 0.04]]})
 */

// {status: "OPEN", change: [["QUARTER", 0.5]]}
/**
 *  Currency Unit	    Amount
    Penny	            $0.01 (PENNY)
    Nickel	            $0.05 (NICKEL)
    Dime	            $0.1 (DIME)
    Quarter	            $0.25 (QUARTER)
    Dollar	            $1 (ONE)
    Five Dollars	    $5 (FIVE)
    Ten Dollars	        $10 (TEN)
    Twenty Dollars	    $20 (TWENTY)
    One-hundred Dollars	$100 (ONE HUNDRED)
*/