const choise = prompt ('Enter operator + - / *');
const a = prompt ('Enter operand A');
const b = prompt ('Enter operand B');

const num = (Number(a));
const num2 = (Number(b));
const sum = num + num2;
const min = num - num2;
const div = num / num2;
const mult = num * num2;

if (choise === '+') {
    alert(`${num} + ${num2} = ${sum}`)
} else if (choise === '-') {
    alert(`${num} - ${num2} = ${min}`)
} else if (choise === '/') {
    alert(`${num} / ${num2} = ${div}`)
} else if (choise === '*') {
    alert(`${num} * ${num2} = ${mult}`)
}


// const choise = prompt ('Enter operator + - / *');
// const a = prompt ('Enter operand A');
// const b = prompt ('Enter operand B');

// if (choise === '+') {
//     alert(`${a} ${choise} ${b} = ${Number(a) + Number(b)}`)
// } else if (choise === '-') {
//     alert(`${a} ${choise} ${b} = ${Number(a) - Number(b)}`)
// } else if (choise === '/') {
//     alert(`${a} ${choise} ${b} = ${Number(a) / Number(b)}`)
// } else if (choise === '*') {
//     alert(`${a} ${choise} ${b} = ${Number(a) * Number(b)}`)
// }

// const choise = prompt ('Enter operator + - / *');
// const a = Number(prompt ('Enter operand A'));
// const b = Number(prompt ('Enter operand B'));

// if (choise === '+') {
//     alert(`${a} ${choise} ${b} = ${a + b}`)
// } else if (choise === '-') {
//     alert(`${a} ${choise} ${b} = ${a - b}`)
// } else if (choise === '/') {
//     alert(`${a} ${choise} ${b} = ${a / b}`)
// } else if (choise === '*') {
//     alert(`${a} ${choise} ${b} = ${a * b}`)
// }


// const choise = prompt ('Enter operator + - / *');
// const a = Number(prompt ('Enter operand A'));
// const b = Number(prompt ('Enter operand B'));
// let result;

// if (choise === '+') {
//     result = a + b;
// } else if (choise === '-') {
//     result = a - b;
// } else if (choise === '/') {
//     result = a / b;
// } else if (choise === '*') {
//     result = a * b;
// }

// alert(`${a} ${choise} ${b} = ${result}`);


//чистая функция - функция должна быть детерминирована + ноу сайдс ефектс

// пример not determinated
// const action = '-'
// function calc(a, b) {
//     if (choise === '+') {
//         return a + b;
//     } else if (choise === '-') {
//         return a - b;
//     } else if (choise === '/') {
//         return a / b;
//     } else if (choise === '*') {
//         return a * b;
//     } else {
//         return 'wrong action';
//     }
// }


// side effects
// когда функция что-то меняет за своими пределами

// let result;   
// function calc(choise, a, b) {
//     if (choise === '+') {
//         result = a + b;
//     } else if (choise === '-') {
//         result = a - b;
//     } else if (choise === '/') {
//         result = a / b;
//     } else if (choise === '*') {
//         result = a * b;
//     } else {
//         result = 'wrong action';
//     }
// }





// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');
 
// const result = calc(choise, a, b);

// alert(`${a} ${choise} ${b} = ${result}`);

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     if (choise === '+') {
//         return a + b;
//     } else if (choise === '-') {
//         return a - b;
//     } else if (choise === '/') {
//         return a / b;
//     } else if (choise === '*') {   
//         return a * b;
//     }
//         return 'wrong action';
// }




// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');
 
// const result = calc(choise, a, b);

// alert(`${a} ${choise} ${b} = ${result}`);

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     switch(choise) {
//         case '+': return a + b;
//         case '-': return a - b;
//         case '/': return a / b;
//         case '*': return a * b;
//         default: return 'wrong action';
//     }
// }




// const choise = prompt ('Enter operator + - / *');
// const a = getOperand('A');
// const b = getOperand('B');
// const result = calc(choise, a, b);

// showResult(choise, a, b, result);

// function getOperand(operandName) {
//     return Number(prompt(`Enter operand ${operandName}`))
// }

// function calc (choise, a, b) {
//     switch(choise) {
//         case '+': return add(a, b);
//         case '-': return sub(a, b);
//         case '/': return div(a, b);
//         case '*': return mul(a, b) ;
//         default: return 'wrong action';
//     }
// }

// function showResult(choise, a, b) {
// alert(`${a} ${choise} ${b} = ${result}`);
// }

// function add(a,b) {
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

