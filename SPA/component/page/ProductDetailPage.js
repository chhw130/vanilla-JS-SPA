import { GetProductDetail } from "../api/GetProductDetail.js";
import ProductDetail from "../contents/ProductDetail.js";

export default function ProductDetailPage({ $target, productId }) {
  const $page = document.createElement("div");

  $target.appendChild($page);

  $page.className = "ProductDetailPage";

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }
    $page.innerHTML = `<h1>${this.state.name} 상품 정보</h1>`;

    new ProductDetail({ $page, data: this.state }).render();
  };

  const getData = async () => {
    const data = await GetProductDetail(productId);
    this.setState(data);
  };

  getData();
}
