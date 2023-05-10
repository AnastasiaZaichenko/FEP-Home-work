import $ from "jquery";
export class TodoListView {
  static DELETE_BTN = ".deleteBtn";
  static EDIT_BTN = ".editBtn";
  static SELECTOR_TODO_ITEM = ".todoItem";

  constructor(options) {
    this.$listEl = this.init();
    this.options = options;
  }

  init() {
    return $(`<ul id="todoList"></ul>`)
      .on("click", TodoListView.DELETE_BTN, this.onDeleteBtnClick.bind(this))
      .on("click", TodoListView.EDIT_BTN, this.onEmptyClick.bind(this))
      .on(
        "click",
        TodoListView.SELECTOR_TODO_ITEM,
        this.onTodoElClick.bind(this)
      );
  }

  onDeleteBtnClick(e) {
    e.stopPropagation();
    const id = this.getTodoElId(e.target);

    this.options.onDelete(id);
  }

  onEmptyClick(e) {
    e.stopPropagation();

    const id = this.getTodoElId(e.target);

    this.options.onEdit(id);
  }

  onTodoElClick(e) {
    const id = this.getTodoElId(e.target);

    this.options.onToggle(id);
  }

  getTodoElId(el) {
    return el.closest(TodoListView.SELECTOR_TODO_ITEM).dataset.id;
  }

  appendTo($el) {
    $el.append(this.$listEl);
  }

  renderTodoList(list) {
    const html = list.map(this.generateTodoHtml).join("");

    this.$listEl.html(html);
  }

  replaceTodo(id, todo) {
    const oldTodoEl = this.$listEl.find(`[data-id="${id}"]`);
    const newTodoEl = this.generateTodoHtml(todo);

    oldTodoEl.replaceWith(newTodoEl);
  }

  renderTodo(todo) {
    const html = this.generateTodoHtml(todo);

    this.$listEl.append(html);
  }

  generateTodoHtml(todo) {
    // const done = todo.done ? " done" : "";

    return `
      <li
      class="todoItem"
      data-id="${todo.id}"
      >
        <span>${todo.name}</span>
        <form >
        <input id="id" type="hidden" />
        <input class='grade' id="${todo.marks[0]}" type="text" placeholder="${todo.marks[0]}"/>
        <input class='grade' id="${todo.marks[1]}" type="text" placeholder="${todo.marks[1]}"/>
        <input class='grade' id="${todo.marks[2]}" type="text" placeholder="${todo.marks[2]}"/>
        <input class='grade' id="${todo.marks[3]}" type="text" placeholder="${todo.marks[3]}"/>
        <input class='grade' id="${todo.marks[4]}" type="text" placeholder="${todo.marks[4]}"/>
        <input class='grade' id="${todo.marks[5]}" type="text" placeholder="${todo.marks[5]}"/>
        <input class='grade' id="${todo.marks[6]}" type="text" placeholder="${todo.marks[6]}"/>
        <input class='grade' id="${todo.marks[7]}" type="text" placeholder="${todo.marks[7]}"/>
        <input class='grade' id="${todo.marks[8]}" type="text" placeholder="${todo.marks[8]}"/>
        <input class='grade' id="${todo.marks[9]}" type="text" placeholder="${todo.marks[9]}"/>
        </form>
        <button class="deleteBtn">[Delete]</button>
      </li>
    `;
  }

  removeTodo(id) {
    this.$listEl.find(`[data-id='${id}']`).remove();
  }
}
