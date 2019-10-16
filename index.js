// Your code here

// function declaration:
//For hoisting to work, the function must be defined as a function declaration.
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//function expression - when we write function(){...} and assign it to a variable
//Very importantly, function expressions are not hoisted.
let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function inner(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b
  }
  
  let actionApplyer = function(int, funcArry) {
    //if array is empty result will be the initial int
    let result = int
    for (let i = 0; i < funcArry.length; i++ ){
      result = funcArry[i](result)
      //result will keep updating as stuff is done to int
    }
    //return result (either int or result of funcArr opeations)
    return result
  }

  // function outer(greeting, message="It's a good day to learn") {
//     let innerFunc = function(name, language="Python") {
//         return `${greeting}, ${name}. ${message} ${language}`
//     }
//     return innerFunc("Tom", "Javascript")
// }

// outer("Howdy")