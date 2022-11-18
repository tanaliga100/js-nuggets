// REST OPERATOR
// gather collect or items
// desctructuring, functions declartions
// placement is important
// rest operator always on the last element

const fruits = ["apple", "banana", "lemon"];
const person = {
  name: "Lara",
  age: 21,
  job: "dev",
  favColors: ["red", "blue", "green", "yellow"],
};
const { age, ...rest } = person;

// functions
const getAverage = (name, ...rest) => {
  const ave = rest.reduce((total, item) => {
    const totalG = (total += item / rest.length);
    return total;
  }, 0);
  console.log(ave);
};
// const testScore = [87, 86, 97, 76];
// const ranDom = [12, 2312, 323123, 123123];
// getAverage(person.name, ...testScore);

const testScore = [87, 86, 97, 76];
const ranDom = [12, 2312, 323123, 123123];
const test = [...testScore];
const scores = [...ranDom, testScore, "new"];
console.log(test);
console.log(scores);
