class Controller {
  constructor(container) {
    this.container = container;
    this.server = new Server(this.container, {
      showMessage: this.renderMessage.bind(this),
    });
    this.chatView = new ChatView(this.container, {
      send: this.sendToServer.bind(this),
    });
  }

  sendToServer(data) {
    this.server.send(JSON.stringify(data));
  }

  renderMessage(data) {
    this.chatView.renderMessage(data);
  }
}
