// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const dltBtn = document.getElementById("dlt-btn");
let tabBtn = document.getElementById("tab-btn");

//localStorage.setItem('myLead', 'www.google.com');

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsLocalStorage) {
  myLeads = leadsLocalStorage;
  renderLeads(myLeads);
}

function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href= 'https://${leads[i]}' >${leads[i]}</a>
    </li>`;
    console.log(leads[i]);
    // console.log(listItems);
    // another method
    // const liEl = document.createElement("li");
    // liEl.textContent = myLead[i];
    // ulEl.appendChild(liEl);
  }

  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  
  renderLeads(myLeads);
});

// delete button
dltBtn.addEventListener("click", function () {
  //console.log('clicked')
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

// Tab button
tabBtn.addEventListener("click", function () {
  console.log("clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //console.log(tabs)
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});
