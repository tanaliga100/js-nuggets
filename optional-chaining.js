// OPTIONAL CHAINING

const people = [
  {
    name: "John",
    location: { street: "Grants Ext" },
    timezone: { offset: "GMT +5:00" },
  },
  {
    name: "Lara",
    location: { street: "Grants Ext" },
  },
  {
    name: "Kimmy",
    location: { street: "Grants Ext" },
    timezone: { offset: "GMT +5:00" },
  },
];
const info = () => {
  people.forEach((element) => {
    const data = `${element.name} resides in ${element.location?.street} at ${
      element.timezone?.offset || "GMT +8:00"
    }`;
    console.log(data);
    return data;
  });
};
info();
