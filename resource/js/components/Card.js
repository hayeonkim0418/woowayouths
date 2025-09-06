import { card_data } from "../data/card_data.js";

export const Card = () => {
  const cardList = document.querySelector(".card-list");

  if (!cardList) return;

  const tagTxt = (array) => {
    return array
      .map((item2) => {
        return `
        <li>${item2.tagTxt}</li>
      `;
      })
      .join("");
  };

  const CardBind = () => {
    const config = {};
    cardList.innerHTML = card_data
      .map((item) => {
        return `
        <li>
            <p class="category">${item.category}</p>
            <a class="card" href="#">
              <div class="img">
                <img src="${item.img}" />
              </div>
              <div class="txt">
                <ul class="tag">
                    ${item.tag ? `${tagTxt(item.tag)}` : ""}
                </ul>
                <div class="title">${item.title}</div>
                <span class="date">${item.date}</span>
              </div>
            </a>
          </li>
        `;
      })
      .join("");
  };
  CardBind();
};
