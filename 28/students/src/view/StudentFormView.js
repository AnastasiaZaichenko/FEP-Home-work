import $ from "jquery";
import formTemplate from "./StudentFormTemplate.html";

export class StudentFormView {
  constructor(options) {
    this.$form = this.init();
    this.$inputs = this.$form.find("input, textarea");
    this.options = options;
  }

  init() {
    return $(formTemplate).on("submit", this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();
    const student = this.getStudent();
    if (!this.isStudentValid(student)) {
      this.showError(new Error("Поле не должно быть пустым"));
      return;
    }

    this.options.onSubmit(student);
  }

  showError(error) {
    alert(error.message);
  }

  isStudentValid(student) {
    return student.name !== "";
  }

  appendTo($el) {
    $el.append(this.$form);
  }

  getStudent() {
    const student = {};

    for (const input of this.$inputs) {
      student[input.id] = input.value;
    }
    return student;
  }

  setStudent(student) {
    for (const input of this.$inputs) {
      input.value = student[input.id];
    }
  }

  clearForm() {
    for (const input of this.$inputs) {
      input.value = "";
    }
  }
}
