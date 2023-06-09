import MainPage from "../page/MainPage.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    if (pathname === "/%EC%82%AC%EC%9B%90%20SPA/index.html") {
      new MainPage({ $target }).render();
    }
  };

  this.route();
}
