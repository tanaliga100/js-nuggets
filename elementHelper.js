const heading = document.querySelector(".heading");
const listItem = document.querySelectorAll(".list-item");

console.log(heading, listItem);

const getElement = (selector, isList) => {
  if (isList) {
    const els = [...document.querySelectorAll(selector)];
    if (els.length < 1) {
      throw new Error("No elements");
    }
    return els;
  }

  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error("No element");
};

console.log(getElement(".list-item", true));
