export function costCalculator(num) {
    let transactionCost = Number((num + 3 + (num * 0.01)));  
    return transactionCost
}
const cost = costCalculator(Number(process.argv[3]))
console.log(cost)