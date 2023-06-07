import ProductList from "./productListPage/ProductList.js";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = "<h1>상품 목록</h1>";

  $target.appendChild($page);

  this.render = () => {
    new ProductList({ $page }).render();
  };
}
