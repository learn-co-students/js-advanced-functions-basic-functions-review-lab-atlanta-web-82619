// Your code here
function saturdayFun(act = 'roller-skate'){
    return (`This Saturday, I want to ${act}!`)
}

function mondayWork(act =  'go to the office'){
    return (`This Monday, I will ${act}.`)
}


function wrapAdjective(style= '*'){
    return function(adj) {
        return (`You are ${style}${adj}${style}!`)
    }
}

let Calculator = {
     add(a,b){
    return (a+b)},
    subtract(a,b){
        return (a-b)
    },
    multiply(a,b){
    return (a*b)},
    divide(a,b){
    return (a/b)}
    }


    function actionApplyer(start, ray) {
        let a = start
      
        for (let i = 0; i < ray.length; i++ ){
          a = ray[i](a)
        }
      
        return a
      }