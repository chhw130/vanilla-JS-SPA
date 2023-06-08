import { GetProductList } from "../api/GetProductList.js";
import { routeChange } from "../route/router.js";

export default function Product({ $page }) {
  const $product = document.createElement("ul");
  $page.appendChild($product);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    console.log(this.state);
    const template = this.state
      ?.map((product) => {
        return `
            <li class="Product" data-id=${product.id}>
            <img
              src=${product.imageUrl}
            />
            <div class="Product__info">
              <div>${product.name}</div>
              <div>${product.price}원 ~</div>
            </div>
          </li>`;
      })
      .join("");

    $product.innerHTML = template;
  };

  this.render();

  const getData = async () => {
    const data = await GetProductList();
    this.setState(data);
  };

  $product.addEventListener("click", ({ target }) => {
    const list = target.closest("li");
    const { id: productId } = list.dataset;

    if (productId) {
      routeChange(`/web/products/${productId}`);
    }
  });

  getData();
}
