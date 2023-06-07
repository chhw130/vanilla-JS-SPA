import CartPage from "./page/CartPage.js";
import ProductDetailPage from "./page/ProductDetailPage.js";
import ProductListPage from "./ProductListPage.js";
import { init } from "./router/route.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/web/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({
        $target,
        productId,
      }).render();
    } else if (pathname === "/web/cart") {
      new CartPage({ $target }).render();
    }
  };

  init(this.route);
  this.route();
}
