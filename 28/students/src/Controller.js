import { Collection } from "./model/Collection";
import { StudentFormView } from "./view/StudentFormView";
import { StudentListView } from "./view/StudentListView";

export class Controller {
  constructor($rootEL) {
    this.studentCollection = new Collection();
    this.studentListView = new StudentListView({
      onDelete: this.deleteStudentEl.bind(this),
      onEdit: this.updateStudent.bind(this),
    });
    this.studentFormView = new StudentFormView({
      onSubmit: this.createStudent.bind(this),
    });

    this.studentFormView.appendTo($rootEL);
    this.studentListView.appendTo($rootEL);
    this.studentListView.appendCapture($rootEL);

    this.studentCollection.fetch().then(() => {
      this.studentListView.generateStudentList(
        this.studentCollection.getList()
      );
    });
  }

  updateStudent(id, index, newMark) {
    const studentEl = this.studentCollection.findStudentById(id);
    studentEl.marks[index] = newMark;

    this.studentCollection
      .update(id, studentEl)
      .catch((e) => this.studentListView.showError(e));
  }

  createStudent(student) {
    this.studentCollection
      .create(student)
      .then((newStudent) => {
        this.studentListView.renderStudent(newStudent);
        this.studentFormView.clearForm();
      })
      .catch((e) => this.studentListView.showError(e));
  }

  deleteStudentEl(id) {
    this.studentCollection.delete(id).catch((e) => showError(e));
    this.studentListView.removeStudent(id);
  }
}
