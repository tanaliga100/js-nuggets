// FILTER retuns a new array just like map. But with filter you can manipulate the size of an array base on the conditions

// FIND , returns a single instance of an object, returns first match, if no match then it will return undefined

const people = [
  {
    name: "Lara",
    age: 21,
    position: "Senior",
  },
  {
    name: "Dan",
    age: 32,
    position: "Junior",
  },
  {
    name: "Jenn",
    age: 11,
    position: "Intern",
  },
  {
    name: "Kimmy",
    age: 26,
    position: "TL",
  },
];

const fruits = ["apple", "orange", "lemon"];
// filter young people
const youngPeople = people.filter((item) => {
  return item.age < 30;
});
console.log(youngPeople);
// filter object
const devs = people.filter((dev) => dev.position === "TL");
console.log(devs);
//  no match || undefined
const senior = people.filter((s) => s.position === "senior-dev");
console.log(senior);
// find
const peter = people.find((p) => p.name.toLowerCase() === "lara");
console.log(peter);
//find
const f = fruits.find((f) => f === "lemon");
console.log(f);
// no match
const oldP = people.find((p) => p.age > 45);
console.log(oldP);
// multilple matches
const randomP = people.find((p) => p.age < 35);
console.log(randomP);
