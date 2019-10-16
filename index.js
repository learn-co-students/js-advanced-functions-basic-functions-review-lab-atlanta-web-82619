// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char = '*'){
    return function(string = 'special'){
        return `You are ${char}${string}${char}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b
}

function actionApplyer(integer, functions){

    let result = integer

    for(let i = 0; i < functions.length; i++){
        result = functions[i](result)
    }

    return result

}