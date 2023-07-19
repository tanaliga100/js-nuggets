// SPREAD OPERATOR
// Allows and iterable to spread/expand individually inside the reciever
// split into single items and COPY THEM;

const udemy = "udemy";
const letters = [...udemy]; // spreading the letters individually
console.log(letters);

// mixing the array of strings
const boys = ["jordan100", "martin100", "mayer100"];
const girls = ["taylor", "miley", "avril"];
const bff = "brylle";

const friends = [...boys, bff, ...girls];
console.log(friends);

// * REFERENCING THE STATE OBJECT

// USING ARRAY
const newFriends = [...friends];
newFriends[0] = "kimmy100";
console.log(newFriends);

// ES2018 - ES8 OBJECTS
const person = {
  name: "jordan100",
  job: "developer",
};
console.log(person);
const newPerson = { ...person, age: 21 };
newPerson.name = "tanaliga100";
console.log(newPerson);
