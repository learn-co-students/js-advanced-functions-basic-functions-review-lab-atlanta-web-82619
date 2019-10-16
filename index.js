// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(character = "*") {
    return function(string = "special") {
        return `You are ${character}${string}${character}!`
    }
}

let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function actionApplyer(integer, array) {
    let result = integer
    array.forEach(func => result = func(result))
    return result
}