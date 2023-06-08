import CartPage from "./page/CartPage.js";
import MainPage from "./page/MainPage.js";
import ProductDetailPage from "./page/ProductDetailPage.js";
import { init } from "./route/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    if (pathname === "/web/") {
      new MainPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 4) {
      const [, , , productId] = pathname.split("/");
      console.log(productId);
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/web/cart") {
      new CartPage({ $target }).render();
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}

new App({ $target: document.querySelector(".App") });
