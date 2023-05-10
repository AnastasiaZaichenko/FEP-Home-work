const ws = new WebSocket("ws://localhost:8080");
const form = document.querySelector("#formWs");
const container = document.querySelector("#container");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const messageChat = getMessage();
  ws.send(JSON.stringify(messageChat));
  form.reset();
}

ws.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data);
    container.insertAdjacentHTML("beforeend", getTemplate(data));
  } catch (e) {
    console.error("Can not get data ");
  }
};

ws.onopen = () => {
  console.log("Connection was established");
};

ws.close = () => {
  console.log("Connection was stopped");
};

ws.onerror = (error) => {
  console.log("Connection was interrapted", error.message);
};

function getTemplate(data) {
  return `<tr>
  <td >${data.name}</td>
  <td>${data.message}</td>
      </tr>`;
}
function getMessage() {
  return {
    name: form.name.value,
    message: form.message.value,
  };
}
