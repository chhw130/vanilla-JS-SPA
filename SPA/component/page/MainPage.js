import Product from "../contents/Product.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");

  $page.className = "ProductListPage";

  $page.innerHTML = `<h1>상품목록</h1>`;

  this.render = () => {
    $target.appendChild($page);
    new Product({ $page }).render();
  };
}
