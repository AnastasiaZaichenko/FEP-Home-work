class StudentListView {
  static DELETE_BTN = ".deleteBtn";
  static SELECTOR_STUDENT_MARK = ".markInput";
  static SELECTOR_STUDENT = ".studentItem";

  constructor(options) {
    this.$capture = $(
      `<tr>
    <th>Name</th>
    <th>Marks</th>
    <th>Actions</th>
  </tr>`
    );
    this.$listEl = this.init();
    this.options = options;
  }
  init() {
    return $(`
    <tbody id="studentContainer"></tbody>
    `)
      .on(
        "focusout",
        StudentListView.SELECTOR_STUDENT_MARK,
        this.onStudentContainerClick.bind(this)
      )
      .on(
        "click",
        StudentListView.DELETE_BTN,
        this.onDeleteBtnClick.bind(this)
      );
  }

  onStudentContainerClick(e) {
    const target = e.target;

    const input = this.findInput(target);
    const student = this.findStudentEl(target);
    const id = this.getStudentElId(student);
    const newMark = Number(input.value);

    const index = input.id;

    this.options.onEdit(id, index, newMark);
  }

  onDeleteBtnClick(e) {
    e.stopPropagation();
    const id = this.getStudentElId(e.target);
    this.options.onDelete(id);
  }

  getStudentElId(el) {
    return el.closest(StudentListView.SELECTOR_STUDENT).dataset.id;
  }

  appendCapture($el) {
    $el.prepend(this.$capture);
  }
  appendTo($el) {
    $el.prepend(this.$listEl);
  }

  generateStudentList(list) {
    const html = list.map(this.generateStudentHtml).join("");
    this.$listEl.html(html);
  }

  renderStudent(student) {
    const html = this.generateStudentHtml(student);
    this.$listEl.append(html);
  }

  generateStudentHtml(student) {
    const { id, name, marks } = student;
    return `
    <tr class="studentItem" data-id="${id}">
    <td>${name}</td>
    <td>
      <form>
      <input type="text" id="0" class="markInput" data-id="0" value='${marks[0]}'/>
      <input type="text" id="1" class="markInput" data-id="1" value='${marks[1]}'/>
      <input type="text" id="2" class="markInput" data-id="2" value='${marks[2]}'/>
      <input type="text"  id="3"class="markInput" data-id="3" value='${marks[3]}'/>
      <input type="text"  id="4" class="markInput" data-id="4" value='${marks[4]}'/>
      <input type="text"  id="5" class="markInput" data-id="5" value='${marks[5]}'/>
      <input type="text"  id="6" class="markInput" data-id="6" value='${marks[6]}'/>
      <input type="text"  id="7" class="markInput" data-id="7" value='${marks[7]}'/>
      <input type="text"  id="8" class="markInput" data-id="8" value='${marks[8]}'/>
      <input type="text"  id="9" class="markInput" data-id="9" value='${marks[9]}'/>
      </form>
    </td>
    <td><span><button type="button" class="deleteBtn">Delete</button></span></td>
    </tr>
      `;
  }

  replaceStudent(id, student) {
    const oldStudentEl = this.$listEl.find(`[data-id='${id}']`);
    const newStudentEl = this.generateStudentHtml(student);

    oldStudentEl.replaceWith(newStudentEl);
  }

  removeStudent(id) {
    this.$listEl.find(`[data-id="${id}"]`).remove();
  }

  findStudentEl(el) {
    return el.closest(StudentListView.SELECTOR_STUDENT);
  }

  findIndexInput(el) {
    return el.dataset.id;
  }

  findInput(el) {
    return el.closest(StudentListView.SELECTOR_STUDENT_MARK);
  }
  showError(error) {
    alert(error.message);
  }
}
