// Your code here
function saturdayFun(fun = 'roller-skate') {
  return `This Saturday, I want to ${fun}!`;
}

let mondayWork = function(work = 'go to the office') {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(string = '*') {
  return function(adjective = 'special') {
    return `You are ${string}${adjective}${string}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3;
  },
  multiply: function() {
    return 1 * 3;
  },
  divide: function() {
    return 10 / 5;
  }
};

function actionApplyer(start, array) {
  if (!array.length) {
    return start;
  } else {
    let a = start;
    array.forEach(function(item) {
      a = item(a)
    })
    return a;
  }
}