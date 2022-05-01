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

arr.pop(); // to remove the last element of the array
console.log(arr.length);

////////////////////////////////////////////////////////////////////////////////////////////////

// Count to ten

//      START       FINISH      STEP SIZE
for (let count = 1; count < 11; count++) {
  console.log(count); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

for (let i = 0; i <= 100; i += 10) {
  console.log(i); // 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
}

//////////////////////////////////////////////////////////////////////////////////////////////

// Objects

// Objects are collections of key-value pairs.
// Objects are used to store data in-depth - composite / complex data types.
// Objects are used to store data in a structured way.

let course = {
  title: "JavaScript Essential Training",
  lessons: 10,
  creator: "Morten Rand-Hendriksen",
  length: 69,
};

console.log(course["title"]); // by using [] we can access the value of the key
console.log(course.title); // by using dot notation we can access the value of the key
