// using dot notaion
const person = {
  name: "Lara",
};
person.age = 12;
person.gender = "male";

// using square brackets notations
const items = {
  prodName: ["Bags", "Shoes", "Slippers"],
};
console.log(items["prodName"].map((item) => item));

let appState = "loading";
appState = "error";
let keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";

const state = {
  loading: true,
  name: "",
  job: "",
};

const updateState = (key, value) => {
  console.log(state);
  return (state[key] = value);
};
updateState("name", "john");
updateState("job", "dev");
updateState("products", []);
updateState("products", ["bags", "shoes"]);

console.log(state);
