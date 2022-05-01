// 1. create two variable, firstCard & secondCard
// set their values to random number between 2 - 11

// 2. create a variable, sum, and set it to the sum of the two cards

let firstCard;
let secondCard;
// console.log(firstCard, secondCard);

let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";

let sum = 0;
//console.log("Sum: " + sum);

// To store message-el paragraph in messageEl variable
let messageEl = document.getElementById("message-el"); // getElementById method
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // querySelector is a method
let cardEl = document.querySelector("#card-el");

let obj = {
  name: "Per",
  playerChips: 145,
};

let palyerEl = document.querySelector("#player-el");
palyerEl.textContent = `${obj.playerName} has $ ${obj.playerChips} chips`;

const startGame = () => {
  isAlive = true;
  firstCard = generateRandomNumber();
  secondCard = generateRandomNumber();
  cards = [firstCard, secondCard];
  renderGame();
};

const newGame = () => {
  if (sum > 21) {
    alert("You are out of game");
    return;
  }

  let newCard = generateRandomNumber();
  cards.push(newCard);
  sum += newCard;

  renderGame();
};

const renderGame = () => {
  //cardEl.textContent = "Cards: " + cards[0] + " & " + cards[1];
  cardEl.textContent = cards.map((card) => card).join(" & ");
  sumEl.textContent = "Sum is: " + sum;
  if (sum <= 21) {
    message = "Do you want to draw a card?!";
    hasBlackjack = false;
  } else if (sum === 21) {
    message = " Whooo You win!";
    hasBlackjack = true;
  } else {
    message = " you're out of game";
    isAlive = false;
  }
  messageEl.textContent = message;
};

function generateRandomNumber() {
  const randomNum = Math.floor(Math.random() * 13) + 1;
  // IF 1 RETURN 11
  // IF 11 - 13 RETURN 10
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}
// console.log("hasBlackjack", hasBlackjack);
// console.log("isAlive", isAlive);
// console.log("message", message);

