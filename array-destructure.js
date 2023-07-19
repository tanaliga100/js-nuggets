// ARRAY DESCTRUCTURING..
// unpacked variables or values in a set
// substituting variable when destructuting is feasible but the order is important
const fruits = ["apple", "banana", "lemon"];
const friends = [
  "jordan100",
  "martin100",
  "guy100",
  "will100",
  "elton100",
  "billy100",
  "lara",
];
const [una, , pangatlo, apat] = fruits;
console.log(una, pangatlo, apat);

const [me, uncle, third, fourth, lara] = friends;
console.log(me, uncle, lara);
