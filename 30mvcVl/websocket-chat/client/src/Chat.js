export default class Chat {
  static URL = "ws://localhost:8080";

  constructor(options) {
    this.options = options;
    this.ws = new WebSocket(Chat.URL);
    this.ws.onopen = this.onopen.bind(this);
    this.ws.close = this.close.bind(this);
    this.ws.onerror = this.onerror.bind(this);
    this.ws.onmessage = this.onmessage.bind(this);
  }

  onmessage(event) {
    try {
      const data = JSON.parse(event.data);
      this.options.onMessage(data);
    } catch (e) {
      this.options.onError(e);
    }
  }

  onopen() {
    console.log("Connection was established");
  }

  close() {
    console.log("Connection was stopped");
  }

  onerror(error) {
    console.log("Connection was interrapted", error.message);
  }

  send(data) {
    const requestStr = JSON.stringify({
      name: data.name,
      message: data.message,
    });

    try {
      this.ws.send(requestStr);
    } catch (e) {
      this.options.onError(e);
    }
  }
}
