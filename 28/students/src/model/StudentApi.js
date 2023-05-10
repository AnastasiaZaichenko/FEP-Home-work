export class StudentApi {
  static API = "https://6391adecac688bbe4c4f165a.mockapi.io/api/students/";

  static request(url = "", method = "GET", body) {
    return fetch(StudentApi.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  static getList() {
    return StudentApi.request().catch(() => {
      throw new Error("Con not retrieve marks list from server.");
    });
  }

  static create(student) {
    return StudentApi.request("", "POST", student).catch(() => {
      throw new Error("Con not create marks on server.");
    });
  }

  static delete(id) {
    return StudentApi.request(id, "DELETE").catch(() => {
      throw new Error("Con not delete marks on server.");
    });
  }

  static update(id, changes) {
    return StudentApi.request(id, "PUT", changes).catch(() => {
      throw new Error("Con not update marks on server.");
    });
  }
}
