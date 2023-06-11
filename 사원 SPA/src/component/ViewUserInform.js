export default function ViewUserInform({ $page }) {
  const $userInform = document.createElement("div");

  $page.appendChild($userInform);

  const userData = JSON.parse(localStorage.getItem("userInform"));

  console.log(userData);

  this.render = () => {
    const template = `<div class="userInform">${userData.userId}</div>`;

    $userInform.innerHTML = template;
  };
}
