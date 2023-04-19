const listToDo = document.querySelector("#todoList");
const btn = document.querySelector("#msgButton");
const input = document.querySelector("#msgInput");

btn.addEventListener("click", onBtnClick);
function onBtnClick() {
  if (input.value) {
    const point = document.createElement("li");
    point.textContent = input.value;
    listToDo.prepend(point);
  }
  input.value = "";
}
