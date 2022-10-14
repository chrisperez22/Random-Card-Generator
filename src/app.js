import "./style.css";

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["diams", "hearts", "spades", "clubs"];

const cards = [];
for (let v = 0; v < values.length; v++) {
  for (let s = 0; s < suits.length; s++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
  }
}

function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let entity;
  cardSuit === "diams"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");
  document.querySelector("#top-suit").innerHTML = entity;
  document.querySelector("#bottom-suit").innerHTML = entity;
  document.querySelector("#number").innerHTML = cardValue;
  if (entity === "&diams;" || entity === "&hearts;") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bottom-suit").style.color = "red";
  }
}

randomCard(cards);
