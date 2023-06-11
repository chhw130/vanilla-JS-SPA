import UserForm from "../component/UserForm.js";

export default function SignupPage({ $target }) {
  const $page = document.createElement("div");

  $target.appendChild($page);

  $page.innerHTML = `<div id="signupPage">회원가입페이지</div>`;

  this.render = () => {
    new UserForm({ $page }).render();
  };
}
