//Task_1

function averageWaitTime(customersOrders) {

    let currentTime = 0
    let totalWaitTime = 0

    for(let [arrivaltime, ordertime] of customersOrders) {

        currentTime = Math.max(currentTime, arrivaltime) + ordertime

        totalWaitTime += currentTime - arrivaltime
    }

    return totalWaitTime / customersOrders.length
}

console.log(averageWaitTime([[1,2],[2,5],[4,3]]))
console.log(averageWaitTime([[5,2],[5,4],[10,3],[20,1]]))




//Task_2
function maximumPoints(s, x, y) {
    let stack = [], score = 0

    let first = x >= y ? "ab" : "ba"
    let second = x >= y ? "ba" : "ab"

    let firstScore = x >= y ? x : y
    let secondScore = x >= y ? y : x

    for(let char of s) {
        if(stack.length > 0 && stack[stack.length - 1] + char === first) {
            stack.pop()
            score += firstScore
        } else {
            stack.push(char)
        }
    }

    const remaining = stack.join("")
    stack = []

    for(let char of remaining) {
        if(stack.length > 0 && stack[stack.length - 1] + char === second) {
            stack.pop(), score += secondScore
        } else {
            stack.push(char)
        }
    }

    return score
}
console.log(maximumPoints("cdbcbbaaabab", 4, 5))
console.log(maximumPoints("aabbaaxybbaabb", 5, 4))