// OBJECT DESTRUCTURE
// unpacked varialbles or values from the object instance
// the order doesnt matter but the property name must be accurate

const dan = {
  first: "Lara",
  last: "Baldesco",
  age: 21,
  gender: "male",
  habbits: {
    travel: "land travel",
    music: "plays guitar",
  },
  favColors: ["red", "blue", "green", "yellow"],
};
// const {
//   gender,
//   habbits: { travel: adv },
//   favColors: [first, second, ...others],
// } = dan;

const personDetails = ({
  first,
  last,
  habbits: { travel, music },
  favColors,
}) => {
  return `${first} ${last} likes ${travel} & also ${music}
  <ul>${favColors.map((i) => `<li>${i}</li>`)}</ul>
 `;
};
const el = document.querySelector("#result");
el.innerHTML = personDetails(dan);
