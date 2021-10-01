const card = document.querySelectorAll(".card-inner");
const moves = document.querySelector(".moves-count");

var flipCounter = 0;
var movesCounter = 0;
let remainingCards = card.length;

function flipBackAllAndVisibility() {
  setTimeout(function () {
    for (let index = 0; index < card.length; index++) {
      if (card[index].classList.contains("is-flipped")) {
        if (!card[index].classList.contains("matched-card-visibility")) {
          for (let index_1 = 0; index_1 < card.length; index_1++) {
            if (index_1 !== index) {
              if (card[index_1].classList.contains("is-flipped")) {
                if (
                  card[index].attributes._title.value ===
                  card[index_1].attributes._title.value
                ) {
                  card[index_1].classList.add("matched-card-visibility");
                  card[index].classList.add("matched-card-visibility");
                  flipCounter = 0;
                  movesCounter = movesCounter + 1;
                  moves.innerHTML = movesCounter;
                  remainingCards -= 2;
                  if (remainingCards == 0) {
                    console.log("yy");
                  }
                } else {
                  card[index].classList.toggle("is-flipped");
                  card[index_1].classList.toggle("is-flipped");
                  flipCounter = 0;
                  movesCounter = movesCounter + 1;
                  moves.innerHTML = movesCounter;
                }
              }
            }
          }
        }
      }
    }
  }, 1000);
}

for (let item = 0; item < card.length; item++) {
  card[item].addEventListener("click", () => {
    if (flipCounter < 2) {
      if (card[item].classList.contains("is-flipped")) {
        card[item].classList.toggle("is-flipped");
        flipCounter--;
      } else {
        card[item].classList.toggle("is-flipped");
        flipCounter++;
      }
    } else {
      if (card[item].classList.contains("is-flipped")) {
        card[item].classList.toggle("is-flipped");
        flipCounter--;
      }
    }

    //This is to make the matching cards disappear and counting moves

    if (flipCounter === 2) {
      flipBackAllAndVisibility();
    }
  });
}
