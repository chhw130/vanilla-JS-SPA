import ViewUserInform from "../component/ViewUserInform.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");

  $target.appendChild($page);

  $page.className = "container";

  $page.innerHTML = `<div id="mainPage">메인페이지입니다</div>`;

  this.render = () => {
    new ViewUserInform({ $page }).render();
  };
}
