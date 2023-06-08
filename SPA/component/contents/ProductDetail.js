export default function ProductDetail({ $page, data }) {
  const $productDetail = document.createElement("div");
  $productDetail.className = "ProductDetail";
  $page.appendChild($productDetail);

  this.render = () => {
    console.log(data);

    const template = `
        <img
        src=${data.imageUrl}
      />
      <div class="ProductDetail__info">
        <h2>${data.name}</h2>
        <div class="ProductDetail__price">${data.price}원 ~</div>
        <select>
          <option>선택하세요.</option>
          ${data.productOptions.map((option) => {
            return `<option ${option.stock === 0 ? "disabled" : ""}>${
              option.name
            } ${option.price > 0 ? `(+ ${option.price})` : ""}</option>`;
          })}
        </select>
        <div class="ProductDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            <li>
              커피잔 100개 번들 10,000원
              <div><input type="number" value="10" />개</div>
            </li>
            <li>
              커피잔 1000개 번들 15,000원
              <div><input type="number" value="5" />개</div>
            </li>
          </ul>
          <div class="ProductDetail__totalPrice">175,000원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
        `;

    $productDetail.innerHTML = template;
  };

  this.render();
}
