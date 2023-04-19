const CLASS_DELETE_BTN = "deleteBtn";
const SELECTOR_LIST_ITEM = ".listItem";
const input = document.querySelector("#msgInput");
const ul = document.querySelector("#toDoList");
const form = document.querySelector("#toDoForm");

form.addEventListener("submit", onFormSubmit);
ul.addEventListener("click", onUlClick);

init();

function init() {
  TodoApi.getList()
    .then((list) => {
      generateItemList(list);
    })
    .catch((e) => showError(e));
}

function onFormSubmit(e) {
  e.preventDefault();

  const todo = getItem();
  if (!isValid(todo)) {
    showError(new Error("Поле сообщение не должно быть пустым"));
    return;
  }
  TodoApi.create(todo)
    .then((newTodo) => {
      addItem(newTodo);
      clear();
    })
    .catch((e) => showError(e));
  // clear();
}

function getItem() {
  return { title: input.value };
}

function isValid(todo) {
  return todo.title !== "";
}

function showError(error) {
  alert(error.message);
}

function generateItemList(list) {
  const htmlBlock = list.map(generateItem).join("");

  ul.innerHTML = htmlBlock;
}

function addItem(todo) {
  const htmlBlock = generateItem(todo);

  ul.insertAdjacentHTML("beforeend", htmlBlock);
}

function generateItem(todo) {
  const { id, title } = todo;
  return ` <li class="listItem" id="${id}">
  <span>${title}</span><button type="button" class="deleteBtn">Delete</button>
  </li>
    `;
}

function clear() {
  input.value = "";
}

function onUlClick(e) {
  const target = e.target;
  const dataEl = findDataEl(target);
  if (target.classList.contains(CLASS_DELETE_BTN)) {
    TodoApi.delete(dataEl).catch((e) => showError(e));
    deleteTodoEl(dataEl);
  } else {
    changeBackground(dataEl);
  }
}

function deleteTodoEl(el) {
  el.remove();
}

function findDataEl(el) {
  return el.closest(SELECTOR_LIST_ITEM);
}

function changeBackground(dataEl) {
  if (dataEl.style.background !== "white") {
    dataEl.style.background = "white";
  } else {
    dataEl.style.background = "green";
  }
}
