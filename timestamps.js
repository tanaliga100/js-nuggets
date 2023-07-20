// DATES
console.log(new Date());

const el = document.querySelector("#result");
el.innerHTML = new Date();
document.body.appendChild(el);

// LOGS AND MORE
// console.log(Date.now()); // in milleseconds
// console.log(new Date().getTime());
// console.log(new Date().valueOf());

setTimeout(() => {
  //   console.log(Date.now());
}, 1000);

// USE CASES

// 1. can use as random ID's
let people = [];
people = [...people, { id: Date.now(), name: "jordan100" }];
setTimeout(() => {
  people = [...people, { id: Date.now(), name: "martin100" }];
  //   console.log(people);
}, 1000);

// 2. get Dates
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log("FUTURE DATE", futureDate);
console.log("NOW", new Date());

// 3. Difference between dates
const firstDate = new Date();
const secondDate = new Date(2024, 6, 20);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();
console.log(firstValue);
console.log(secondValue);

const timeDiff = secondValue - firstValue;
console.log(timeDiff);
const minutes = timeDiff / (1000 * 60);
console.log("minutes", minutes);

const hours = (timeDiff / 1000) * 60 * 60;
console.log("hours", hours);
