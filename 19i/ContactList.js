class ContactApi {
  static API = "https://642597b39e0a30d92b368324.mockapi.io/api/contacts/";

  static request(url = "", method = "GET", body) {
    return fetch(ContactApi.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not execute server request.");
    });
  }

  static getList() {
    return ContactApi.request().catch(() => {
      throw new Error("Con not retrieve todo list from server.");
    });
  }

  static create(todo) {
    return ContactApi.request("", "POST", todo).catch(() => {
      throw new Error("Con not create todo on server.");
    });
  }

  static delete(id) {
    return ContactApi.request(id, "DELETE").catch(() => {
      throw new Error("Con not delete todo on server.");
    });
  }

  static update(id, changes) {
    return ContactApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Con not update todo on server.");
    });
  }
}
