import CartPage from "./page/CartPage.js";
import ProductDetailPage from "./page/ProductDetailPage.js";
import ProductListPage from "./ProductListPage.js";
import { init } from "./router/route.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    /**페이지 라우팅 할때마다 기존 페이지 미쳤냐 */
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

  /**라우팅 초기화 해주기 */
  init(this.route);

  this.route();
}
