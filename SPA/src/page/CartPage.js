export default function CartPage({ $target }) {
  const $CartPage = document.createElement("div");

  $CartPage.innerHTML = `<h1>장바구니</h1>`;
  this.render = () => {
    $target.appendChild($CartPage);
  };
}
