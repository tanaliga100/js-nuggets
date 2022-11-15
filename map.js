//Map Method
// returns a new array
// does not change the size of the original array
// always uses the value of the original array
const People = [
  {
    id: 1,
    name: "Jordan",
    age: 21,
  },
  {
    id: 2,
    name: "Lara",
    age: 11,
  },
  {
    id: 3,
    name: "Kimmy",
    age: 32,
  },
];
const getAges = (person) => {
  return `${person.name} is already ${person.age * 2}, 2 years from now`;
};
const person = People.map(getAges);

const newPeople = People.map((item) => {
  return {
    name: item.name.toUpperCase(),
    age: item.age + 20,
  };
});
console.log("newPeople", newPeople);

const newPerson = People.map((person) => `<p>${person.name}</p>`);
const el = document.createElement("p");
const res = document.body.appendChild(el);
res.innerHTML = newPerson.join("");
