import { routeChange } from "../route/router.js";

export default function Header({ $target }) {
  const $header = document.createElement("header");

  $target.appendChild($header);

  this.render = () => {
    const template = `<div id="home">Home</div>
        <div id="signup" >Signup</div>`;

    $header.innerHTML = template;
  };

  $header.addEventListener("click", ({ target }) => {
    const type = target.id;
    if (type === "home") {
      routeChange("/%EC%82%AC%EC%9B%90%20SPA/index.html");
    } else if (type === "signup") {
      routeChange("/%EC%82%AC%EC%9B%90%20SPA/index.html/signup");
    }
  });
}
