// //callback functions are all over the place
// function makeUpperCase(str) {
//   console.log(str.toUpperCase());
// }
// // makeUpperCase("KIMMY AGUILAR");
// function revereString(value) {
//   console.log(value.split("").reverse().join(""));
// }

// function getInfo(name, enemy, cb) {
//   const info = `${name} hates ${enemy}`;
//   cb(info);
// }

// getInfo("Kimmy Aguilar", "Lara", (value) => console.log(value.toUpperCase()));

// const createBTN = document.createElement("button");
// createBTN.textContent = "Create";
// createBTN.addEventListener("click", () => {
//   createBTN.classList.add(`btn-primary`);
// });
// // document.body.appendChild(createBTN);

// // target element in the dom
// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");

// //create element
// const btn = document.createElement("button");
// btn.textContent = "Event";
// document.body.appendChild(btn);

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     first.style.backgroundColor = "red";
//     setTimeout(() => {
//       second.style.backgroundColor = "blue";
//       setTimeout(() => {
//         third.style.backgroundColor = "green";
//         third.style.padding = "1rem";
//       }, 3000);
//     }, 1000);
//   }, 1000);
// });

// FUNCTIONS ARE ALL OVER THE PLACE
// EXAMPLES ARE BY USING SETTIMEOUT, EVENT LISTENERS, ARRAY METHODS

function makeUpperCase(arg) {
  console.log(arg.toUpperCase());
}
function reverseString(arg) {
  const rev = String(arg.split(" ").reverse().join("")).toUpperCase();
  console.log(rev);
}
// makeUpperCase("jordan100");

function handleName(name, cb) {
  const fullName = `${name} 100`;
  const fullDetails = `The name is  ${name}`;
  cb(fullName);
  // some more logic here...
  // cb(fullDetails);
}

//  makeUpeerCase has passed here as an argument ... no need to invoke
// handleName("lara", makeUpperCase);
// handleName("lara", reverseString);
handleName("chris martin", function (value) {
  console.log("VALUE : ", value);
});

// get the DOM
const btn = document
  .querySelector(".btn")
  .addEventListener("click", function (val) {
    setTimeout(() => {
      alert("value", val);
    }, 2000);
  });
