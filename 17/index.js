const input = document.querySelector("input");
const getInfoBtn = document.querySelector("#getBtn");
const container = document.querySelector("#container");

getInfoBtn.addEventListener("click", onGetInfoBtnClick);

function onGetInfoBtnClick() {
  const login = input.value;
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((login) => {
      renderInfo(login);
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

  clean();
}

function renderInfo(data) {
  const html = generatePostHtml(data);

  container.innerHTML = html;
}

function generatePostHtml(post) {
  const { avatar_url, public_repos, followers, following } = post;
  return `
    <div>
        <div><img src="${avatar_url}"></div>
        <div>${public_repos}</div>
        <div>${followers}</div>
        <div>${following}</div>
    </div>
  `;
}

function clean() {
  input.value = "";
}
