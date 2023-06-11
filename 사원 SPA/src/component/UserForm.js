export default function UserForm({ $page }) {
  const $form = document.createElement("form");

  $page.appendChild($form);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    const template = `
    <label>아이디</label>
    <input id="userId"></input>
    <label>이름</label>
    <input id="userName"></input>
    <label>생년월일</label>
    <input id="userBirth"></input>
    <button>제출하기</button>
    `;

    $form.innerHTML = template;

    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userId = e.target.userId.value;
      const userName = e.target.userName.value;
      const userBirth = e.target.userBirth.value;

      if (!userId || !userName || !userBirth) {
        return alert("필수 정보를 입력하세요!");
      }

      const userData = {
        userId,
        userName,
        userBirth,
      };
      console.log(userData);
    });
  };
}
