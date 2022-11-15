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

const categories = ["all", ...new Set(menu.map((item) => item.category))];
const results = (document.querySelector("#result").innerHTML = categories
  .map((item) => {
    return `
        <p>${item}</p>
        <button>Delete</button>`;
  })
  .join(""));
