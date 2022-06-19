import { cardsLabel } from "./elementQuery.js";
export const hoverFirst = () => {
  cardsLabel.forEach((item) => {
    let checkboxItem = item.querySelector(".cards-label__checbox");
    let cardPreview = item.querySelector(".card");
    checkboxItem.checked ? cardPreview.classList.add('hoverState'): '';

    checkboxItem.addEventListener("change", () => {
      cardPreview.classList.contains('hoverState') ?cardPreview.classList.remove('hoverState'): '';
      !checkboxItem.checked ? cardPreview.classList.remove('hoverState'): '';
      if(checkboxItem.checked){
        item.addEventListener('mouseleave', () => {
          cardPreview.classList.add('hoverState')
        })
      }
    });
  });
};
