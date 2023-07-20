// FOR-IN-LOOP = iterate over an object properties
// * not advides to use it on array;
// * on arrays its important to use for-of loop or other array methods or the classing for-loop;

const person = {
  name: "jordan100",
  age: 21,
  status: "student",
};

for (const prop in person) {
  console.log(`${prop} : ${person[prop]}`);
}
