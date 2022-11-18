// CONVERT AN OBJECTS INTO ARRAY
// There are three ways
// 1. Object.keys() - converts object into arrays
// 2.Object.values() - converts object into arrays
// 3.Object.entries() - converts both

const person = {
  name: "dan",
  age: 26,
  status: "dev",
};              

const results = Object.entries(person);
// mep method
const newResults = results.map((item, key) => {
  const [first, second] = item;
  return { first, second };
});
console.log(newResults[0], newResults[2], ["all", ...newResults]);
