var prompt = require('prompt-sync')();
let n1 = parseInt(prompt(`please enter your 1st number:`))
let n2 = parseInt(prompt(`please enter your 2nd number:`))
let operation =prompt("write any 1 operation from the following:(+,-,*,/):")
    if(operation == "+"){
        console.log (`your answer is ${n1} ${operation} ${n2} = ${n1 + n2}`)
    }
else if (operation == "-"){
    console.log (`your answer is ${n1} ${operation} ${n2} = ${n1-n2}`)
}
else if (operation== "*"){
    console.log (`your answer is ${n1} ${operation} ${n2} = ${n1 * n2}`)
}
else if (operation== "/"){
    console.log (`your answer is ${n1} ${operation} ${n2} = ${n1 / n2}`)
}
else {
    console.log ("choose correct answer")
}
export{}