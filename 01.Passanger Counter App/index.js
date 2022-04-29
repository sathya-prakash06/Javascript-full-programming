//document.getElementById("count-el").innerHTML = 5;

// let myAge = 25;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
let counterEle = document.getElementById("count-el");
const entries = document.getElementById("prev-entries");

let count = 0;
const increase = () => {
  count += 1;
  counterEle.textContent = count;
};

const save = () => {
  entries.innerHTML += `<li>${count}</li>`;
  counterEle.textContent = 0;
  count = 0;
};
