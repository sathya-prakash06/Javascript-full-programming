let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  console.log(myLead);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    listItems += `<li><a href= ${myLead[i]}' target='_blank'>${myLead[i]}</a></li>`;
    // console.log(listItems);
    // another method
    // const liEl = document.createElement("li");
    // liEl.textContent = myLead[i];
    // ulEl.appendChild(liEl);
  }
  ulEl.innerHTML = listItems;
}
