// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');
// const result = calc(choise, a, b);
// const arr = ['+', '-', '/', '*'];

// showResult(choise, a, b, result, arr);

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     switch(choise) {
//         case '+': return add(a, b);
//         case '-': return sub(a, b);
//         case '/': return div(a, b);
//         case '*': return mul(a, b) ;
//     }
// }

// function showResult (choise, a, b, result, arr) {
//     if ((!isNaN(a) && !isNaN(b)) && arr.includes(choise)) {
//         alert(`${a} ${choise} ${b} = ${result}`);
//     }
//       else { 
//         alert ('wrong action, try again');
//     } 
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mul(a, b) {
//     return a * b;
// }

// второй вариант/////////////////////////////////////////////


// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');


// if ( isNaN(a) || isNaN(b) || (choise !== '+' && choise !== '-' && choise !== '/' && choise !== '*'))
// {
//     alert ('wrong action, try again');
// } else {
// const result = calc(choise, a, b);
// showResult(choise, a, b, result);
// }

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     switch(choise) {
//         case '+': return add(a, b);
//         case '-': return sub(a, b);
//         case '/': return div(a, b);
//         case '*': return mul(a, b) ;
//     }
// }

// function showResult (choise, a, b, result, arr) {
//         alert(`${a} ${choise} ${b} = ${result}`);
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mul(a, b) {
//     return a * b;
// }

/////////////////////////////////////////////////////////третий способ

// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');
// const ACTIONS = {'+': add, '-': sub, '/': div, '*': mul};


// if ( isNaN(a) || isNaN(b) || (choise !== '+' && choise !== '-' && choise !== '/' && choise !== '*'))
// {
//     alert ('wrong action, try again');
// } else {
// const result = calc(choise, a, b);
// showResult(choise, a, b, result);
// }

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     return ACTIONS[choise](a, b)
// }

// function showResult (choise, a, b, result, arr) {
//         alert(`${a} ${choise} ${b} = ${result}`);
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mul(a, b) {
//     return a * b;
// }


/////////////////////////////////////////////////////////////

// join - метод все сводит в одну строку
const ACTIONS = {'+': add, '-': sub, '/': div, '*': mul};
const ACTIONS_LIST = Object.keys(ACTIONS); // ['+', '-', '/', '*']
const choise = prompt (`Enter operator ${ACTIONS_LIST.join(', ')}`); //string
const a = getOperand('A');
const b = getOperand('B');

if ( isNaN(a) || isNaN(b) || (choise !== '+' && choise !== '-' && choise !== '/' && choise !== '*'))
{
    alert ('wrong action, try again');
} else {
const result = calc(choise, a, b);
showResult(choise, a, b, result);
}

function getOperand(operandName) {
    return Number(prompt(`Enter operand ${operandName}`))
}

function calc (choise, a, b) {
    return ACTIONS[choise](a, b)
}

function showResult (choise, a, b, result, arr) {
        alert(`${a} ${choise} ${b} = ${result}`);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}
