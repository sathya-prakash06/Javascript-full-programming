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

let user = {
  name: "John",
  sayHello: () => {
    console.log("Hello");
  },
};

////////////////////////////////////////////////////////////////////////////////////////

// create a person object that contains three keys: name , age & country
// use yourself as an eg to set the values for name, age and country

// create a function , logData(), that uses the person object to craete a
// string in the following format:
// "Person's name is <name>, age is <age> and country is <country>"

// call the logData() function and verify that the output is correct

let person = {
  name: "Sathya Prakash P",
  age: 25,
  country: "India",

  logData: function () {
    console.log(
      `Person's name is ${this.name}, age is ${this.age} and country is ${this.country}`
    );
  },
};
person.logData();

////////////////////////////////////////////////////////////////////////////////////////////////////////

// less than 6 yewars old - free
// 6-17 years old - child discount
// 18-26 years old - student discount
// 27-66 years old - full price
// 67+ years old - senior citizen discount

// create a conditional statement (if/else if/ else) that logs out the discount
// the passenger will get based upon the value of the age variable

let ageOfPerson = Math.floor(Math.random() * 100);

function calculateDiscount(ageOfPerson) {
  let discount = "";
  if (ageOfPerson < 6) {
    discount = "Free";
  } else if (ageOfPerson >= 6 && ageOfPerson <= 17) {
    discount = "Child discount";
  } else if (ageOfPerson >= 18 && ageOfPerson <= 26) {
    discount = "Student discount";
  } else if (ageOfPerson >= 27 && ageOfPerson <= 66) {
    discount = "Full price";
  } else {
    discount = "Senior citizen discount";
  }
  return [discount, ageOfPerson];
}

console.log(calculateDiscount(ageOfPerson));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

let largeCountries = ["Russia", "USA", "Japan", "India", "China"];

// use the for loop to log out the countries in the array

for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let largeCountriesNew = ["Russia", "USA", "Japan", "India", "China"];

// use push, pop, unshift  and shift
console.log(largeCountries);
largeCountries.push("Australia");
console.log(largeCountries);
largeCountries.pop();
console.log(largeCountries);
largeCountries.unshift("Canada");
console.log(largeCountries);
largeCountries.shift();
console.log(largeCountries);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// If it is Friday the 13th , log out this spooky face:😟
// use the logical; "AND operator (&&)"

let dateOfMonth = 13;
let weekday = "Friday";
if (dateOfMonth && weekday == "Friday") {
  console.log("😟");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a function that return a random item for the array

let hands = ["rock", "paper", "scissors"];

function randomHand() {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

console.log(randomHand());



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
