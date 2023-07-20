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

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const result = Object.entries(person);
console.log(result);

// USING MAP METHOD
const newResult = result.map((item) => {
  const [first, second] = item;
  return first;
});

console.log(newResult);

// USING FOR-OF LOOP
for (const [first, second] of result) {
  console.log(first, second);
}
