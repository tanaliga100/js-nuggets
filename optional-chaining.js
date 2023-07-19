// OPTIONAL CHAINING

const people = [
  {
    name: "Jordan100",
    location: { street: "Grants Ext" },
    timezone: { offset: "GMT +5:00" },
  },
  {
    name: "Martin100",
    location: { street: "New York Ext" },
  },
  {
    name: "Mayer100",
    location: { street: "Manchester Ext" },
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
