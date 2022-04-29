//document.getElementById("count-el").innerHTML = 5;

// let myAge = 25;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
let counterEle = document.getElementById("count-el");
let count = 0;
function increase() {
  count += 1;
  counterEle.innerHTML = count;
}

function save() {
  const entries = document.getElementById("prev-entries");
  entries.innerHTML += `<li>${count}</li>`;
}
