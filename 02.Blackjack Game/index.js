// 1. create two variable, firstCard & secondCard
// set their values to random number between 2 - 11

// 2. create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
// console.log(firstCard, secondCard);

let cards = [firstCard, secondCard];
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;
//console.log("Sum: " + sum);

// To store message-el paragraph in messageEl variable
let messageEl = document.getElementById("message-el"); // getElementById method
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // querySelector is a method
let cardEl = document.querySelector("#card-el");

const startGame = () => {
  renderGame();
};

const newGame = () => {
  let newCard = Math.floor(Math.random() * 11) + 2;

  sum += newCard;
  renderGame();
};

const renderGame = () => {
  cardEl.textContent = "Cards: " + cards[0] + " & " + cards[1];
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

// console.log("hasBlackjack", hasBlackjack);
// console.log("isAlive", isAlive);
// console.log("message", message);

//////////////////////////////                  PRACTICES                        //////////////////////////////

// check if the person is old enough to play the game(21)
//Log a suitable message to the console in both the cases

let age = Math.random() * 100;

if (age >= 21) {
  console.log("You can play the game");
} else {
  console.log("You can't play the game");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse && givesCertificate) {
  // true && true = true
  console.log("You can graduate");
} else {
  console.log("You can't graduate");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays - ordered lists of items

let arr = [
  "Checkout my Netflix clone", // 0
  "Here's the code  for my project", // 1
  "'I've just relaunched my portfolio", // 2
];

console.log(arr[0]);
console.log(arr.length);

arr.push("newElement"); // to add new element to the end of the array
console.log(arr.length);

arr.pop() // to remove the last element of the array
console.log(arr.length);
