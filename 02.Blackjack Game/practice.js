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
