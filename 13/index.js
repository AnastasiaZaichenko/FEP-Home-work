const btn = document.querySelector("#button");
const userName = document.querySelector("#name");
const userSurname = document.querySelector("#surname");
const userPhone = document.querySelector("#phone");
const tableRow = document.querySelector("#datasUser");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  const list = getUser();
  if (!isValid(list)) {
    showError();
    return;
  }
  addUser(list);
  clear();
}

function getUser() {
  return {
    name: userName.value,
    surname: userSurname.value,
    phone: userPhone.value,
  };
}

function isValid() {
  return (
    userName.value !== "" &&
    userSurname.value !== "" &&
    !isNaN(userPhone.value) &&
    userPhone.value !== ""
  );
}

function addUser(list) {
  const htmlBlock = `
      <tr id="newUser">
        <td>${list.name}</td>
        <td>${list.surname}</td>
        <td>${list.phone}</td>
      </tr>
    `;

  tableRow.insertAdjacentHTML("beforebegin", htmlBlock);
}

function showError() {
  alert("Неверно введены данные");
}

function clear() {
  userName.value = "";
  userSurname.value = "";
  userPhone.value = "";
}
