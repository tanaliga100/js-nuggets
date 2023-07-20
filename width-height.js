// WIDTH/HEIGHT = window, any element
// innerWidth = Width
// innerHeight = Height
// getBoundingClientRect() = any element

// console.log("height", window.innerHeight);
// console.log("width", window.innerWidth);

// TARGET THE BUTTON AND LOG THE DIMENSIONS
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
});
