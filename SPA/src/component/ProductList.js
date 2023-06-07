import { getProductList } from "../api/getProductList.js";

export default function ProductList({ $page }) {
  const $productList = document.createElement("div");
  $page.appendChild($productList);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }
    console.log(this.state);
    const productList = this.state
      .map((data) => {
        return `<div>${data.id}</div>
                <div>${data.name}</div>
                <img src=${data.imageUrl}></img>`;
      })
      .join("");

    $productList.innerHTML = productList;
  };

  const getData = async () => {
    const data = await getProductList();
    this.setState(data);
  };

  getData();
}
