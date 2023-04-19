const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9]
    }
  ]



console.log(averageStudentMark(12))
console.log(averageGroupMark(students));
console.log(averageGroupMark2(students));

function averageStudentMark(studentID) {
    // const student = students.find((student) => {
    //   return student.id === studentID
    // })
    // сокращенная запись 
    const student = students.find(student => student.id === studentID)
      return arrAverage(student.marks) 
    }


function averageGroupMark(students) {
    const allStudentsAllMArks = students.reduce((accumulator, student) => {
      return accumulator.concat(student.marks)
    }, [])
    return arrAverage(allStudentsAllMArks)
}

function averageGroupMark2(students) {
    const allStudentsAveMArks = students.reduce((accumulator, student) => {      
    accumulator.push(arrAverage(student.marks))
    return accumulator
}, [])

  return arrAverage(allStudentsAveMArks)
}

// function arrAverage(arr) {
//   const sum = arr.reduce((accumulator, current) => {
//   return accumulator + current 
// })
//   return sum / arr.length
// }

// еще упростить 

function arrAverage(arr) {
  const sum = arr.reduce(add)
  return sum / arr.length
}


function add (a, b) {
  return a + b
}