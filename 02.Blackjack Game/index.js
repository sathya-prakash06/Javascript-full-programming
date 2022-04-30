// 1. create two variable, firstCard & secondCard
// set their values to random number between 2 - 11

// 2. create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
console.log(firstCard, secondCard);

let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw a card?!");
} else if (sum === 21) {
  console.log(" Whooo You win!");
} else {
  console.log(" you're ouit of game");
}

// check if the person is old enough to play the game(21)
//Log a suitable message to the console in both the cases

let age = Math.random() * 100;

if(age >= 21){
  console.log("You can play the game");
} else {
  console.log("You can't play the game");
}
