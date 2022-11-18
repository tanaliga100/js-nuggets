// OBJECT DESTRUCTURE
// unpacked varialbles or values from the object instance
// the order doesnt matter but the property name must be accurate

const dan = {
  first: "Jordan",
  last: "Tanaliga",
  age: 21,
  gender: "female",
  habbits: {
    travel: "land travel",
    music: "play guitar",
  },
};
const { gender, habbits } = dan;
console.log(gender, habbits);
