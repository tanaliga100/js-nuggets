// OBJECT DESTRUCTURE
// unpacked varialbles or values from the object instance
// the order doesnt matter but the property name must be accurate

const Dan = {
  first: "jordan",
  last: "100",
  age: 21,
  loc: "Philippines",
  gender: "male",
  habbits: {
    tech: "coding",
    music: "plays guitar and piano",
  },
  sibligs: { brother: "jaby100" },
  favColors: ["red", "blue", "green", "yellow"],
};
const {
  first: firstName,
  habbits,
  favColors,
  sibligs: { brother: favSib },
} = Dan;

function getDetails({ first, favColors: colors, habbits: { tech, music } }) {
  // const { first, favColors: colors, habbits } = person;
  return `${
    first.toString().charAt(0).toUpperCase() + first.slice(1)
  } likes  ${tech} and he also ${music}. His favoriteColors are ${colors.join(
    " - "
  )}`;
}

const res = getDetails(Dan);
console.log(res);
