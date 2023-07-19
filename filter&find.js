// FILTER retuns a new array just like map. But with filter you can manipulate the size of an array base on the conditions

// FIND , returns a single instance of an object, returns first match, if no match then it will return undefined

const fruits = ["apple", "orange", "lemon"];
const people = [
  {
    name: "jordan100",
    age: 21,
    position: "Senior",
  },
  {
    name: "martin",
    age: 32,
    position: "Junior",
  },
  {
    name: "guy",
    age: 11,
    position: "Intern",
  },
  {
    name: "will",
    age: 26,
    position: "TL",
  },
];
// FILTER YOUNG PEOPLE
const youngPeople = people
  .filter((person) => {
    return person.age < 25;
  })
  .map((person) => person.name.charAt(0).toUpperCase() + person.name.slice(1));

const dev = people.filter(
  (person) => person.position.toLowerCase() === "senior"
);

// NO MATCH
const designer = people.filter((item) => {
  return item.position === "Senior";
});
if (designer.length === 0 || !designer) {
  // console.log("cant find what you are looking for...");
} else {
  // console.log(designer);
}

// FIND
const fruit = fruits.find((item) => item === "lemon");
// console.log(fruit);
const oldPerson = people.find((person) => person.age > 35);
// console.log(oldPerson);

// MULTIPLE MATCHES
const randomPerson = people.find((item) => item.name === "jordan100");
console.log(randomPerson ? true : "no value");
