const ACTIONS = {'+': add, '-': sub, '/': div, '*': mul}
const LIST_ACTION = ['+', '-', '/', '*']
const MIN_OPERANDS_COUNT = 1
const MAX_OPERANDS_COUNT = 5
const action = getAction()
const amountOperands = getAmountOperands()
const operands = getOperands(amountOperands)
const result = calculate(operands, action)

showResult(operands, action,result)

function getAction () {
let action;
do {
    action = prompt('Enter action')
} while (!isValidAction(action))
    return action 
}
function isValidAction (action) {
   return LIST_ACTION.includes(action)
}


function getAmountOperands () {
let count;
do {
    count = prompt('Enter amount of operands')
} while (!isValidCount(count))
    return count
}

function isValidCount (count) {
    return !isNaN(count) && count > MIN_OPERANDS_COUNT && MAX_OPERANDS_COUNT > count
}

function getOperands (amountOperands) {
    const operands = [];

    for (let i = 0; i < amountOperands; i++) {
        const operand = getOperand(i)
    operands.push(operand)
    }

    return operands;
}

function getOperand (operandName) {
    let operand 
    do {
        operand = prompt(`Enter operand ${operandName}`)
    } while (!isValidNumber(operand))

    return Number(operand)
}

function isValidNumber (operand) {
    return !isNaN(operand) && operand !== ''
}


function calculate (operands, action) {
    let result = operands[0]
    for (let i = 1; i < operands.length; i++) {
        result = ACTIONS[action](result, operands[i])
    }
    return result

}

function showResult (operands, action, result) {
    alert(`${operands.join(` ${action} `)} = ${result}`)
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
