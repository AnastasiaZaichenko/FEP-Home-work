import { StudentApi } from "./StudentApi";
export class Collection {
  #studentList = [];

  fetch() {
    return StudentApi.getList().then((list) => {
      this.#studentList = list;
    });
  }

  create(student) {
    return StudentApi.create(student).then((newStudent) => {
      this.addStudentItem(newStudent);

      return newStudent;
    });
  }

  update(id, student) {
    return StudentApi.update(id, student).then((id, newStudent) => {
      this.editStudentItem(id, newStudent);
      return newStudent;
    });
  }

  delete(id) {
    // this.deleteStudentItem(id);
    StudentApi.delete(id);

    return Promise.resolve();
  }

  getList() {
    return this.#studentList;
  }

  // deleteStudentItem(id) {
  //   this.#studentList = this.#studentList.filter(
  //     (studentItem) => studentItem.id !== id
  //   );
  // }

  editStudentItem(id, student) {
    this.#studentList = this.#studentList.map((studentItem) =>
      studentItem.id === id ? student : studentItem
    );
  }

  addStudentItem(student) {
    this.#studentList.push(student);
  }

  find(id) {
    return this.#studentList.find((student) => student.id === id);
  }

  findStudentById(id) {
    return this.#studentList.find((el) => el.id === id);
  }
}
