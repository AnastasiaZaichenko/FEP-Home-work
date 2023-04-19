const CLASS_DELETE_BTN = "deleteBtn";
const SELECTOR_LIST_ITEM = ".listItem";
const input = document.querySelector("#msgInput");
const ul = document.querySelector("#toDoList");
const form = document.querySelector("#toDoForm");

form.addEventListener("submit", onFormSubmit);
ul.addEventListener("click", onUlClick);

function onFormSubmit(e) {
  e.preventDefault();

  const item = getItem();
  if (!isValid(item)) {
    showError();
    return;
  }
  addItem();
  clear();
}

function getItem() {
  return {
    item: input.value,
  };
}

function isValid() {
  return input.value !== "";
}

function showError() {
  alert("Неверно введены данные");
}

function addItem() {
  const htmlBlock = generateItem();

  ul.insertAdjacentHTML("beforeend", htmlBlock);
}

function generateItem() {
  return ` <li class="listItem">
  <span id>${input.value}</span><button type="button" class="deleteBtn">Delete</button>
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
    dataEl.remove();
  } else {
    changeBackground(dataEl);
  }
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
