// chrome://extensions/

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const dltBtn = document.getElementById("dlt-btn");

//localStorage.setItem('myLead', 'www.google.com');
let myLead = JSON.parse(localStorage.getItem("myLeads"));

if (myLead) {
  renderLeads();
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href= 'https://${myLead[i]}' >${myLead[i]}</a>
    </li>`;
    console.log(myLead[i]);
    // console.log(listItems);
    // another method
    // const liEl = document.createElement("li");
    // liEl.textContent = myLead[i];
    // ulEl.appendChild(liEl);
  }

  inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value);
    console.log(myLead);
    localStorage.setItem("myLeads", JSON.stringify(myLead));
    inputEl.value = "";
    renderLeads();
  });

  ulEl.innerHTML = listItems;
}

dltBtn.addEventListener("click", function () {
  //console.log('clicked')
  localStorage.removeItem("myLeads");
  myLead = [];
  renderLeads();
});
