class ChatView {
  constructor(container, options) {
    this.container = container;
    this.options = options;
    this.renderHtml();
    this.form = document.querySelector("#formWs");
    this.chatContainer = document.querySelector("#chatContainer");
    this.init();
  }
  init() {
    this.form.addEventListener("submit", this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();
    const messageData = this.getMessage();
    if (!this.isDataValid(messageData)) {
      this.showError("Поле не должно быть пустым");
      return;
    }
    this.options.send(messageData);
    this.form.reset();
  }

  getMessage() {
    return {
      name: this.form.name.value,
      message: this.form.message.value,
    };
  }

  isDataValid(data) {
    return data.name !== "" && data.message !== "";
  }

  renderMessage(data) {
    const html = this.getTemplateMessage(data);
    this.chatContainer.insertAdjacentHTML("beforeend", html);
  }

  renderHtml() {
    const html = this.getFormChatTemplate();
    this.container.insertAdjacentHTML("afterbegin", html);
  }

  getFormChatTemplate() {
    return `
        <form id="formWs">
            <label for="name">Name</label>
            <input type="text" id="name">
            <label for="message">Message</label>
            <input type="text" id="message">

            <button>Send message</button>
        </form>
        <table id="chatContainer">
            <tr>
                <th>Name</th>
                <th>Message</th>
            </tr>
           
        </table>
        `;
  }

  getTemplateMessage(data) {
    const { name, message } = data;
    return `
        <tr>
            <td >${name}</td>
            <td>${message}</td>
        </tr>
        `;
  }

  showError(error) {
    alert(error);
  }
}
