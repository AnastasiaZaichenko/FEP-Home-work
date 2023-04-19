class TodoApi {
  static API = "https://642597b39e0a30d92b368324.mockapi.io/api/todo";

  static getList() {
    return fetch(TodoApi.API).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not retrieve todo list from server.");
    });
  }

  static create(todo) {
    return fetch(TodoApi.API, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not create todo on server.");
    });
  }

  static delete(todoEl) {
    const id = todoEl.id;
    return fetch(`https://642597b39e0a30d92b368324.mockapi.io/api/todo/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not delete todo on server.");
    });
  }

  // static update(id, changes) {
  //   return fetch(TodoApi.API + id {
  //     method: "PUT",
  //     body: JSON.stringify(changes),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }

  //     throw new Error("Con not update todo on server.");
  //   });
  // }
}
