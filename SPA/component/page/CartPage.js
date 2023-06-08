import Product from "../contents/Product.js";

export default function CartPage({ $target }) {
  const $page = document.createElement("div");
  $target.appendChild($page);
  $page.className = "CartPage";

  $page.innerHTML = `<h1>장바구니</h1>`;

  this.render = () => {
    new Product({ $target }).render();
  };
}
