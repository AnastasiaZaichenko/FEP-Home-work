import $ from "jquery";
import formTemlate from "./TodoFormView.html";
export class TodoFormView {
  constructor(options) {
    this.$form = this.init();
    this.$inputs = this.$form.find("input, textarea");
    this.options = options;
  }

  init() {
    return $(formTemlate).on("submit", this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();

    const data = this.getFormData();

    if (!this.isTodoValid(data)) {
      showError(new Error("Поле сообщение не должно быть пустым"));
      return;
    }

    this.options.onSubmit(data);
  }

  isTodoValid(todo) {
    return todo.title !== "";
  }

  appendTo($el) {
    $el.append(this.$form);
  }

  getFormData() {
    const data = {};

    for (const input of this.$inputs) {
      data[input.id] = input.value;
    }
    return data;
  }

  setFormData(data) {
    for (const input of this.$inputs) {
      input.value = data[input.id];
    }
  }

  clearFormData() {
    for (const input of this.$inputs) {
      input.value = "";
    }
  }
}
