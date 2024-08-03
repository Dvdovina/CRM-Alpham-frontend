//Burger-Menu
const popupMenu = document.querySelector(".pagecrm_popup-menu");
const popupOpenBtn = document.querySelector(".pagecrm_burger-btn");

function openPopup(popup) {
  popup.classList.add("pagecrm_popup-menu-opened");
  document.addEventListener("keydown", closeOnEsc);
}

function closePopup(popup) {
  popup.classList.remove("pagecrm_popup-menu-opened");
  document.removeEventListener("keydown", closeOnEsc);
}

popupOpenBtn.addEventListener("click", function () {
  openPopup(popupMenu);
});

//Закрытие по клику на Esc
function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".pagecrm_popup-menu-opened");
    closePopup(activePopup);
  }
}
