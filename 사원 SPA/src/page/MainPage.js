export default function MainPage({ $target }) {
  const $page = document.createElement("div");

  $target.appendChild($page);

  $page.innerHTML = `<div>메인페이지입니다</div>`;

  this.render = () => {
    console.log(1);
  };

  this.render();
}
