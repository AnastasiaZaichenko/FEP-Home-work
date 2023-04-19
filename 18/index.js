const CLASS_TODO_ITEM = "todoItem";
// const CLASS_DONE = "done";
const CLASS_DELETE_BTN = "deleteBtn";
const todoList = document.querySelector("#todoList");
const input = document.querySelector("#msgInput");
const button = document.querySelector("#msgButton");

button.addEventListener("click", onButtonClick);
todoList.addEventListener("click", onTodoListClick);

init();

function init() {
  TodoApi.getList()
    .then((list) => {
      renderTodoList(list);
    })
    .catch((e) => showError(e));
}

function onButtonClick() {
  const todo = getTodoData();

  if (!isTodoValid(todo)) {
    showError(new Error("Поле сообщение не должно быть пустым"));
    return;
  }

  TodoApi.create(todo)
    .then((newTodo) => {
      renderTodo(newTodo);
      clear();
    })
    .catch((e) => showError(e));
}

function onTodoListClick(e) {
  const target = e.target;
  const todoEl = findTodoEl(target);
  if (!todoEl) {
    return;
  }
  if (isDeleteBtn(target)) {
    TodoApi.delete(todoEl).catch((e) => showError(e));
    deleteTodoEl(todoEl);
  }
}

function isDeleteBtn(el) {
  return el.classList.contains(CLASS_DELETE_BTN);
}

function findTodoEl(el) {
  return el.closest("." + CLASS_TODO_ITEM);
}

function getTodoData() {
  return { title: input.value };
}

function deleteTodoEl(el) {
  el.remove();
}

function isTodoValid(todo) {
  return todo.title !== "";
}

function renderTodoList(list) {
  const html = list.map(generatTodoHtml).join("");

  todoList.innerHTML = html;
}

function renderTodo(todo) {
  const html = generatTodoHtml(todo);

  todoList.insertAdjacentHTML("beforeend", html);
}

function generatTodoHtml(todo) {
  return `
    <li class="todoItem" id="${todo.id}">
      <span>${todo.title}</span>

      <button class="deleteBtn">[Delete]</button>
    </li>
  `;
}

function clear() {
  input.value = "";
}

function showError(error) {
  alert(error.message);
}
