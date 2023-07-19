// Unique Values
const menu = [
  { name: "pancakes", category: "breakfast" },
  { name: "burger", category: "dinner" },
  { name: "steaks", category: "lunch" },
  { name: "bacon", category: "breakfast" },
  { name: "eggs", category: "breakfast" },
  { name: "pasta", category: "lunch" },
  { name: "sinigang", category: "dinner" },
];

const categories = menu.map((cate) => cate.category);
const uniqueCat = categories.filter((value, key, self) => {
  return self.indexOf(value) === key; // only truthy values will be returned.. and note is the first occurence will be considered
});
console.log(categories);
console.log(uniqueCat);

const res = (document.querySelector("#result").innerHTML = uniqueCat
  .map((cat) => {
    return `<button style="padding: .5rem; margin: ".3rem">${cat}</button>`;
  })
  .join(""));
