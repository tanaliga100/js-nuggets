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

const categories = [...new Set(menu.map((cat) => cat.category))];
console.log(categories);
const result = document.querySelector("#result");
result.innerHTML = categories
  .map((category) => `<button>${category}</button>`)
  .join("");
