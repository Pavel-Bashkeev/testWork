import { cardsLabel } from "./elementQuery.js";
export const choiceStateCard = () => {
 

  cardsLabel.forEach((item) => {
    let checkbox = item.querySelector(".cards-label__checbox");
    let btnItem = item.querySelector('.card__btn');
    btnItem.addEventListener('click', () => {
      checkbox.checked = true
    })
    let state = item.dataset.cardState;

    state === "checked"
      ? checkbox.checked = true
      : state === "disabled"
      ? checkbox.disabled = true
      : "";
  });
};
