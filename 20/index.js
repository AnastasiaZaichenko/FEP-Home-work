const containerAlbums = document.querySelector(".divAlbums");
const containerPictures = document.querySelector(".divPictures");

let albumList = [];

containerAlbums.addEventListener("click", onLinkClick);

initAlbums();

function initAlbums() {
  AlbumApi.getList()
    .then((list) => {
      renderAlbums(list);
      albumList = list;
      showPhotos(albumList[0].id);
    })
    .catch((e) => showError(e));
}

function onLinkClick(e) {
  const target = e.target;
  const albumEL = findAlbumEl(target);
  const id = getAlbumElId(albumEL);

  if (!albumEL) {
    return;
  }

  showPhotos(id);
}

function findAlbumEl(el) {
  return el.closest(".albumItem");
}

function getAlbumElId(el) {
  return el.dataset.id;
}

function showPhotos(id) {
  AlbumApi.getPhotos(id)
    .then((list) => {
      renderPhotos(list);
    })
    .catch((e) => showError(e));
}

function renderAlbums(list) {
  const html = list.map(generateAlbumsHtml).join(" ");
  containerAlbums.insertAdjacentHTML("beforeend", html);
}

function generateAlbumsHtml(album) {
  const { id, title } = album;
  return `
    <div><a href="#" class="albumItem"
   data-id="${id}">${title}</a> 
    </div>
  `;
}

function renderPhotos(list) {
  const html = list.map(generatePhotosHtml).join(" ");
  containerPictures.innerHTML = html;
}

function generatePhotosHtml(album) {
  const { id, url } = album;
  return `
    <div
    class="picturesItem id=${id}" 
    ><img src="${url}" width="200" height="200"/>
    </div>
  `;
}

function showError(e) {
  console.log(e.message);
}

// innerHTML - меняет содержимое внутри тега
// outerHTML - меняет сам тег
