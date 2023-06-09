import Header from "./component/Header.js";
import MainPage from "./page/MainPage.js";
import SignupPage from "./page/SignupPage.js";
import { init } from "./route/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    new Header({ $target }).render();

    if (pathname === "/%EC%82%AC%EC%9B%90%20SPA/index.html") {
      new MainPage({ $target }).render();
    } else if (pathname === "/%EC%82%AC%EC%9B%90%20SPA/index.html/signup") {
      new SignupPage({ $target }).render();
    }
  };

  init(this.route);

  this.route();
}
