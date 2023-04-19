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
    // students.find((student) => {
    //     if (student.id === studentID) {
    //     for (const student of students) {
    //         student.avarage = student.marks.reduce((all, marks) => all + marks) / student.marks.length;
    //     } 
    //     return console.log(student.avarage)
    //     }
    // })
    const student = students.find((student) => {
      return student.id === studentID
    })
    const sumMarks = student.marks.reduce((accumulator, current) => {
        return accumulator + current 
    })
    return sumMarks / student.marks.length
    }



// function averageGroupMark(students) {
//     const avarageGroup = students.reduce((accumulator, current) => {
//         const nextNumberSum = accumulator + current.avarage
//         return nextNumberSum
//     }, 0)
//     return console.log(avarageGroup / students.length) 
// }

function averageGroupMark(students) {
    const allStudentsAllMArks = students.reduce((accumulator, student) => {
      return accumulator.concat(student.marks)
    }, [])
      const sumMarks = allStudentsAllMArks.reduce((accumulator, current) => {
        return accumulator + current
      })
    return sumMarks / allStudentsAllMArks.length
}

function averageGroupMark2(students) {
    const allStudentsAveMArks = students.reduce((accumulator, student) => {
    const marksSum = student.marks.reduce((accumulator, mark) => {
    return accumulator + mark
 })
    const aveMark = marksSum / student.marks.length
    accumulator.push(aveMark)
    return accumulator
}, [])
    const sum = allStudentsAveMArks.reduce((accumulator, mark) => {
    return accumulator + mark
})
return sum / allStudentsAveMArks.length
}
