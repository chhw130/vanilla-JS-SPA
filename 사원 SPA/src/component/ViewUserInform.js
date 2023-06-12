import { getItem } from "../util/LocalStorage.js";

export default function ViewUserInform({ $page }) {
  const $userInform = document.createElement("div");

  $page.appendChild($userInform);
  $userInform.className = "userCard";

  const userData = getItem("userInform");

  console.log(Object.values(userData));

  console.log(userData);

  this.render = () => {
    const template = userData
      .map((data) => `<div class="userInform">${data.userId}</div>`)
      .join("");

    $userInform.innerHTML = template;
  };
}
