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

    let amountCash = cid.reduce((accum, item) => {
        moneyTable[item[0]].quantity = Math.ceil(item[1] / moneyTable[item[0]].value)
        moneyTable[item[0]].cash = item[1]
        return accum += item[1] 
    }, 0).toFixed(2)
    const reverseCid = cid.reverse()

    function recalculation(iterator) {
        // 1. сдача минус купюра из кассы должно быть больше или ровно нулю
        // 2. если курюра в кассе закончилась, то выходим из цикла
        cash = 0;
        while (moneyTable[iterator[0]].quantity > 0 && Math.floor(change / moneyTable[iterator[0]].value) > 0) {
            moneyTable[iterator[0]].quantity -= 1
            change = (change - moneyTable[iterator[0]].value).toFixed(2)
            cash += moneyTable[iterator[0]].value
            amountCash = (amountCash - moneyTable[iterator[0]].value).toFixed(2)
        }   
        return cash
    }

    const result = reverseCid.reduce((accum, item) => {
        if (Math.floor(change / moneyTable[item[0]].value) > 0) {
            let money = +(recalculation(item)).toFixed(2)
            accum.push([item[0], money])
            
        } else {
            amountCash = (amountCash - moneyTable[item[0]].cash).toFixed(2)
        }
        return accum
    }, [])

    // 1) сумма которую над отдать из кассы = кэш покупателя - цена продукта
    // 2) Максимальное количество монет данной ценности которые можно отдать = сумма % монета
    
    console.log(amountCash)
    console.log(change)
    if (amountCash < change) return {status: "INSUFFICIENT_FUNDS", change: []}
    if (amountCash == change) return {status: "CLOSED", change: cid.reverse()}
    else return {status: "OPEN", change: result}
}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  

/**
 * {
 *      status: "CLOSED", 
 *      change: [
 *          ["PENNY", 0.5], 
 *          ["NICKEL", 0], 
 *          ["DIME", 0], 
 *          ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
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