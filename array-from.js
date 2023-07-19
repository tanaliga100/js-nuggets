// Array.from * not a prototype
// returns an array object from an object
// every item will an array element

const test = "Jordan Tanaliga";

const letters = Array.from(test);
// console.log(letters);

const text = document.querySelectorAll(".text");
const newText = Array.from(text).find((item) => item.textContent === "hello");
// console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});
const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);

  return tempItems;
});

console.log(pages);
console.log(newItems);

// const state = {
//   data: [],
// };
// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const data = await res.json();
//   state.data.push(data);
//   return data;
// };
// fetchData();
// const sample = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
// ];

// const test = Array.from({ length: sample.length }, (item, index) => {
//   return { item, index };
// });
// const itemsInThePage = 5;
// const pages = Math.ceil(test.length / itemsInThePage);
// const newItems = Array.from({ length: pages }, (_, index) => {
//   const start = index * itemsInThePage;
//   const tempItems = test.slice(start, start + itemsInThePage);
//   return tempItems;
// });
// console.log("items", test);
// console.log("pages", newItems);
