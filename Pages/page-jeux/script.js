const cardInfo1 = document.querySelector(".card-1");
const cardInfo2 = document.querySelector(".card-2");
const cardInfo3 = document.querySelector(".card-3");
const showCard1 = document.querySelector(".card-info-1");
const showCard2 = document.querySelector(".card-info-2");
const showCard3 = document.querySelector(".card-info-3");
cardInfo1.addEventListener("mouseover", () => {
  showCard1.classList.add("show");
});
cardInfo2.addEventListener("mouseover", () => {
  showCard2.classList.add("show");
});
cardInfo3.addEventListener("mouseover", () => {
  showCard3.classList.add("show");
});

cardInfo1.addEventListener("mouseout", () => {
  if (showCard1.classList.contains("show")) {
    showCard1.classList.remove("show");
  }
});
cardInfo2.addEventListener("mouseout", () => {
  if (showCard2.classList.contains("show")) {
    showCard2.classList.remove("show");
  }
});
cardInfo3.addEventListener("mouseout", () => {
  if (showCard3.classList.contains("show")) {
    showCard3.classList.remove("show");
  }
});
