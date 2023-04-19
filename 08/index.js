const calculator = createCalculator(100);

calculator.add(10); 
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); 
console.log(calculator.get() === 40) 


calculator.reset();
console.log(calculator.get() === 100) 


function createCalculator(base) {
  let current = base
  return {
    add: (num) => {
      if (isNumber(num)) {
      current += num
      }
    },
    sub: (num) => {
      if (isNumber(num)) {
      current -= num
      }
    },
    set: (num) => {
      if (isNumber(num)) {
      current = num
      }
    },
    get: () => {
    return current
    },
    reset: () => {
    current = base
    }
  }
}

function isNumber(num) {
  return typeof num === 'number'
}




//   function createCalculator(base) {

//     let count = base

//     return {
//     add: (num) => {
//       if (isNumber(num)) {
//         count += num
//       }
//     },
//     sub: (num) => {
//       if (isNumber(num)) {
//         count -= num
//       }
//     },
//     set: (num) => {
//       if (isNumber(num)) {
//        count = num
//       }
//     },
//     get: () => {
//        return  count
//     },
//     reset: () => {
//        count = base
//     }
//   }
// }

// function isNumber(num) {
//   return typeof num === 'number'
// }

  
  
