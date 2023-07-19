// using dot notaion
// const person = {
//   name: "Lara",
// };
// person.age = 12;
// person.gender = "male";

// // using square brackets notations
// const items = {
//   prodName: ["Bags", "Shoes", "Slippers"],
// };
// console.log(items["prodName"].map((item) => item));

// let appState = "loading";
// appState = "error";
// let keyName = "computer";
// const app = {
//   [appState]: true,
// };
// app[keyName] = "apple";

// const state = {
//   loading: true,
//   name: "",
//   job: "",
// };

// const updateState = (key, value) => {
//   console.log(state);
//   return (state[key] = value);
// };
// updateState("name", "john");
// updateState("job", "dev");
// updateState("products", []);
// updateState("products", ["bags", "shoes"]);

// console.log(state);

// USING DOT NOTATION
const person = {
  name: "jordan100",
  age: 21,
};
person.age = 21;

// USING SQUARE BRACKET NOTATION
const items = {
  ["featured-items"]: ["item1", "item2"],
};
// console.log(items["featured-items"]);

// SETUP KEYS DYNAMICALLY
let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
// console.log(app);

// REAL WORLD EXAMPLE
const state = {
  loading: true,
  name: "",
  job: "",
};
console.log(state); // state instance
function updateState(key, value) {
  state[key] = value;
}
updateState("name", "martin100");
updateState("job", "dev");
updateState("loading", false);
updateState("hobbies", ["music", "coding"]);

console.log(state); // state mutated
