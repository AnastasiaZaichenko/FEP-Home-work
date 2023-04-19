// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 100)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 100)
// }

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    return this.result / this.marks.length;
    // return  // получить среднюю оценку студента
  }

  getMarksSum() {
    this.result = this.marks.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    return this.result;
  }
}
// return сумму оценок одного студента

class Group {
  students = [];

  addStudent(student) {
    if (this.isStudent(student)) {
      this.students.push(student);
    }
  }

  isStudent(student) {
    if (student instanceof Student) {
      return this.addStudent;
    }
  }

  getAverageMark() {
    // return this.res / this.marks.length
    // то что вернет нижняя функция поделить на .ленгс
    // средняя средних
  }

  getAverageMarksSum() {
    this.result = [];

    for (this.student of this.students) {
      this.currentStudentResult = this.student.marks.reduce(function (
        sum,
        elem
      ) {
        return sum + elem;
      });

      this.res.push(this.currentStudentResult);
    }

    return this.result;
  }
}

const group = new Group();
console.log(group);
console.log(group.getAverageMark());
console.log(group.getAverageMarksSum());

// _______________
// const st1 = new Student ('John', [10, 8])
// console.log(st1.getMarksSum())
// console.log(st1.getAverageMark())
// __________________

group.addStudent(new Student("John", [10, 8])); // средний балл = 9
group.addStudent(new Student("Alex", [10, 9])); // средний балл = 9.5
group.addStudent(new Student("Bob", [6, 10])); // средний балл = 8
console.log(group.getAverageMarksSum());

console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);

// // Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

// group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
// console.log(group.students.length === 3);
