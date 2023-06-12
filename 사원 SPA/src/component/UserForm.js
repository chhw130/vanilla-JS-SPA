import { getItem, setItem } from "../../../SPA/util/LocalStorage.js";

const mbtiArr = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

export default function UserForm({ $page }) {
  const $form = document.createElement("form");

  $page.appendChild($form);

  this.render = () => {
    const template = `
    <label>아이디</label>
    <input id="userId"></input>
    <label>이름</label>
    <input id="userName"></input>
    <label>생년월일</label>
    <input id="userBirth"></input>
    <label>mbti</label>
    <select id="userMbti">
    ${mbtiArr.map((mbti) => `<option value=${mbti}>${mbti}</option>`)}
    </select>
    <button>제출하기</button>
    `;

    $form.innerHTML = template;

    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userId = e.target.userId.value;
      const userName = e.target.userName.value;
      const userBirth = e.target.userBirth.value;
      const userMbti = e.target.userMbti.value;

      if (!userId || !userName || !userBirth) {
        return alert("필수 정보를 입력하세요!");
      }

      const userData = {
        userId,
        userName,
        userBirth,
        userMbti,
      };

      const remainData = getItem("userInform");
      if (!remainData) {
        setItem("userInform", [userData]);
        alert("추가 되었습니다.");
      } else {
        setItem("userInform", [...remainData, userData]);
        alert("추가 되었습니다.");
      }
    });
  };
}
