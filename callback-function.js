//callback functions are allover the place
function makeUpperCase(str) {
  console.log(str.toUpperCase());
}
// makeUpperCase("KIMMY AGUILAR");
function revereString(value) {
  console.log(value.split("").reverse().join(""));
}

function getInfo(name, enemy, cb) {
  const info = `${name} hates ${enemy}`;
  cb(info);
}

getInfo("Kimmy Aguilar", "Lara", (value) => console.log(value.toUpperCase()));

const createBTN = document.createElement("button");
createBTN.textContent = "Create";
createBTN.addEventListener("click", () => {
  createBTN.classList.add(`btn-primary`);
});
// document.body.appendChild(createBTN);

// target element in the dom
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

//create element
const btn = document.createElement("button");
btn.textContent = "Event";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.backgroundColor = "red";
    setTimeout(() => {
      second.style.backgroundColor = "blue";
      setTimeout(() => {
        third.style.backgroundColor = "green";
        third.style.padding = "1rem";
      }, 3000);
    }, 1000);
  }, 1000);
});
