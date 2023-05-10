class Server {
  constructor(container, options) {
    this.options = options;
    this.ws = new WebSocket("ws://localhost:8080");
    this.init();
  }

  init() {
    this.ws.onopen = () => {
      console.log("Соеденение установлено");
    };

    this.ws.onclose = () => {
      console.log("Соеденение прервано");
    };

    this.ws.onerror = (error) => {
      console.log("Connection was interrupted: ", error.message);
    };
  }

  send(data) {
    this.ws.send(data);
    this.renderFromserver();
  }

  renderFromserver() {
    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.options.showMessage(data);
      } catch (e) {
        console.info("Can not parse data");
      }
    };
  }
}
