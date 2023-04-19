class AlbumApi {
  static API = "https://jsonplaceholder.typicode.com/";
  static getList() {
    return fetch(AlbumApi.API + "albums").then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not get links from server.");
    });
  }

  static getPhotos(id) {
    return fetch(AlbumApi.API + "photos?albumId=" + id).then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Con not get photos from server.");
    });
  }
}
