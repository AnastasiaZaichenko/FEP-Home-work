class StudentFormView {
  constructor(options) {
    this.$form = this.init();
    this.$inputs = this.$form.find("input, textarea");
    this.options = options;
  }

  init() {
    return $(` <form id="studentForm" class="form">
    <input type="text" id="name"    class="formInput" />
    <input type="hidden" id="id" class="formInput"  />
    <button id="addContactBtn">Add</button>
  </form>;
`).on("submit", this.onFormSubmit.bind(this));
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
