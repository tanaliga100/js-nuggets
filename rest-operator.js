// REST OPERATOR
// gather collect or items
// desctructuring, functions declartions
// placement is important

const fruits = ["apple", "banana", "lemon"];
const person = {
  name: "Lara",
  age: 21,
  job: "dev",
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
const testScore = [87, 86, 97, 76];
getAverage(person.name, ...testScore);
