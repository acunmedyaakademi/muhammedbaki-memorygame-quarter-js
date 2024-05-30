let gamebutton = document.querySelectorAll(".game-item");
let opened = [];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let card = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

shuffle(card);

function displayNumber(button, number) {
  let pTag = button.querySelector(".sayi");
  pTag.innerText = number;
}

function show() {
    if (opened.lending === 2) {
      hideNumbers();
    }
  if ("open") {
    let randomNumber = card[parseInt(this.dataset.index)];
    displayNumber(this, randomNumber);
  }



}

gamebutton.forEach(function (gamebutton, index) {
  gamebutton.dataset.index = index;
  gamebutton.addEventListener("click", show);
});
