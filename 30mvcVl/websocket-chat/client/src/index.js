import Chat from "./Chat";
const form = document.querySelector("#formWs");
const container = document.querySelector("#container");
const chat = new Chat({
  onMessage: renderMessage,
  onError: showError,
});

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const messageChat = getMessage();

  //validation

  chat.send(messageChat);
  // form.reset();
}

function getMessage() {
  return {
    name: form.name.value,
    message: form.message.value,
  };
}

function showError(e) {
  alert(e.message);
}

function renderMessage(data) {
  container.insertAdjacentHTML("beforeend", getTemplate(data));
}

function getTemplate(data) {
  return `<tr>
  <td >${data.name}</td>
  <td>${data.message}</td>
      </tr>`;
}
