

// 1. create two variable, firstCard & secondCard
// set their values to random number between 2 - 11

// 2. create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
console.log(firstCard, secondCard);

let sum = firstCard + secondCard;
console.log(sum);