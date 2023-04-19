console.log(pow(2,5))

function pow(num, degree) {
    if (degree == 1) {
        return num 
    } else {
        return num * pow(num, degree - 1)
    }
}

// 2 * 2 * 2 * 2 

// console.log(pow(2, 8))

// // 2 * 2 * 2 * 2
// // 2 * pow(2, 3) * pow(2, 2) * pow(2, 1)

// function pow(num, degree) {
//   if (degree <= 1) {
//     return num
//   }

//   return num * pow(num, degree - 1)
// }

