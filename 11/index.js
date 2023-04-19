class Student {
  constructor(name, marks) {
    this.name = name
    this.marks = marks
  }

  getAverageMark() {
    return this.result / this.marks.length
  }

  getMarksSum() {
    this.result = this.marks.reduce(function (sum, elem) {
      return sum + elem;
    }, 0);
    return this.result
  }
}


class Group {
  #students = [];

  addStudent(student) {
    if (this.#isStudent(student)) {
      this.#students.push(student)
    }
  }

  #isStudent(student) {
    return (student instanceof Student)
  }

  getAverageMark() {
    const averageMarksSum = this.getAverageMarksSum()
    // будет работать без иф
    if (averageMarksSum) {
      this.ave = averageMarksSum.reduce(function (acc, mark) {
        return acc + mark;
      }, 0);
      return this.ave / averageMarksSum.length
    }
  }

  getAverageMarksSum() {
    this.resultAverageMarksSum = []

    for (this.student of this.#students) {
      this.currentStudentResult = this.student.marks.reduce(function (acc, mark) {
        return acc + mark;
      });

      this.resultAverageMarksSum.push(this.currentStudentResult / this.student.marks.length);
    }
    return this.resultAverageMarksSum
  }
  get students() {
    return this.#students
  }
}


const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8


console.log(group.students.length === 3);
group.addStudent({});// игнорируем добавление невалидных данных
console.log(group.students.length === 3);

// // Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);

