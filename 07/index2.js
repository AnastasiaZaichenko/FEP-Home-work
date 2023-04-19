const QUESTIONS = [
    {
      question: 'question 1',
      answer: 'write answer',
      type: 'prompt',
    },
    {
      question: 'question 2',
      answer: true,
      type: 'confirm',
    },
  ];

anketa()
  function anketa (QUESTIONS) {

    // let ans1
    // for (const num of QUESTIONS) {
    // const result =
    const arr = []

    let ans1 = prompt ('Сколько хромосом у здорового человека?')
    let ans2 = confirm ('Путин - хуйло?')
    let ans3 = prompt ('Сколько хромосом у Путина?')
    let ans4 = prompt ('Сколько тупых овец в московии (в млн)?')
    let ans5 = confirm ('Снесли ли памятник Екатерине-2 в Одессе?')
    let ans6 = prompt ('Сколько черных пакетов выделяются на одного орка?')
    let ans7 = prompt ('На сколько вы оцениваете работу ЗСУ от 1 до 10?')
    let ans8 = prompt ('Со скольких позиций готовилось нападение на Беларусь?')
    let ans9 = confirm ('Нужно ли сжигать сосийский флаг?')
    let ans10 = confirm ('Поддерживаете ли вы уход иностранных компаний из московии?')
    let ans11 = confirm ('Считаете ли вы сосию своим домом?')


    if (ans1 === '46') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans2 === true) {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans3 === '47') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans4 === '144') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans5 === true) {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans6 === '1') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans7 === '10') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans8 === '4') {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans9 === true) {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans10 === true) {
    arr.push(10)
    } else {
    arr.push(0)
    }
    if (ans11 === false) {
    arr.push(10)
    } else {
    arr.push(0)
    }

    const result = arr.reduce((accumulator, current) => {
        const Sum = accumulator + current
        return Sum
    }, 0)
    
    return alert(`Вы набрали ${result} баллов`)
}


