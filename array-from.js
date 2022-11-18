// Array.from
// returns an array object from an object
// every item will an array element

// const test = "Jordan Tanaliga";

// const nodeList = document.querySelectorAll(".text");
// const el = Array.from(nodeList).find((el) => el.textContent === "person");
// console.log(el);

const state = {
  data: [],
};
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  state.data.push(data);
  return data;
};
fetchData();
const sample = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
  { id: 3 },
];

const test = Array.from({ length: sample.length }, (item, index) => {
  return { item, index };
});
const itemsInThePage = 5;
const pages = Math.ceil(test.length / itemsInThePage);
const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsInThePage;
  const tempItems = test.slice(start, start + itemsInThePage);
  return tempItems;
});
console.log("items", test);
console.log("pages", newItems);
