//Map Method
// returns a new array
// does not change the size of the original array
// always uses the value of the original array
let People = [
  {
    id: 1,
    name: "Jordan",
    age: 21,
    position: "Developer",
  },

  {
    id: 2,
    name: "Martin",
    age: 11,
    position: "Desginer",
  },

  {
    id: 3,
    name: "Mayer",
    age: 32,
    position: "Manager",
  },
];

// DESTRUCTURING
const ages = People.map(({ name, age }) => age * 2);
// REFERENCE
const getAges = (person) => person.age * 2;
const allAges = People.map(getAges);
console.log(allAges);

// APPENDING TO THE DOM

const newPeople = People.map((item) => {
  // return {
  //   firstName: item.name.toUpperCase(),
  //   oldAge: item.age * 2,
  // };
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  h1.textContent = item.name;
  p.textContent = item.position;
  btn.textContent = "Delete";
  btn.addEventListener("click", () => deletePerson(item.id));
  btn.style.margin = "1rem 0";
  btn.style.padding = ".3rem";

  const wrapper = document.createElement("div");
  wrapper.classList.add("each");
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  wrapper.appendChild(btn);

  return wrapper;
});

const data = document.querySelector("#result");
data.classList.add("result");
newPeople.forEach((individualPerson) => {
  data.append(individualPerson);
});

const deletePerson = (id) => {
  console.log("to delete", id);
  People = People.filter((person) => person.id !== id);
};
