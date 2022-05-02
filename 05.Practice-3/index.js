// template strings/ literals

const recipient = "James";

// Refactor the code below to use template strings

const email = "Hey " + recipient + "! how it going ?";
console.log(email);

const emailTemplate = `Hey ${recipient}! how it going ?`;
console.log(emailTemplate);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const welcomeEl = document.querySelector("#welcome-el");

function greetUser(name, emoji) {
  welcomeEl.textContent = `Welcome to the site,  ${name}  ${emoji}`;
}
greetUser("James", "😍");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a function , add(a,b) , that returns the sum of a and b

console.log(addTwoNumbers(1, 2)); // 3

function addTwoNumbers(a, b) {
  // parameters
  return a + b;
}

console.log(addTwoNumbers(87, 1)); // 88  // arguments

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a function , getFirst(arr) , that returns the first element of an array

function getFirst(arr) {
  return arr[0];
}

let arr = [1, 2, 3, 4, 5];

console.log(getFirst(arr)); // 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myCourses = ["HTML", "CSS", "JS"];

// create a function that takes a single parameter, an array
// and logs all the itemns of the array
// call the function with the array above

function coursesFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
coursesFn(myCourses);


////////////////////////////////////////////////////////////////////////////////////////////////////////////