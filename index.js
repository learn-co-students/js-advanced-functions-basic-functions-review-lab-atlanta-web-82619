// Your code here
function saturdayFun(str = 'roller-skate') {
    return `This Saturday, I want to ${str}!`;
}

let mondayWork = function(str = 'go to the office'){
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(adj = '*') {
    return function(param = 'special') {
        return `You are ${adj}${param}${adj}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(start, arr) {
    arr.forEach(function(func) {
        start = func(start);
    })
    return start;
}