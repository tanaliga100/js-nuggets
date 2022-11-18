// avoid the callback hell
// create new instance and has a callback function
// has 3 states : pending, rejected, fulfilled

// const promise = new Promise((resolve, reject) => {
//   resolve({ state: [1, 232, 23123] });

//   reject({ error: "Dont Work" });
// })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => console.log(error));

// console.log(promise);

// let value = 2;
// const promise2 = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 3);
//   console.log(num);
//   if (num === value) {
//     resolve({ status: "you get it right" });
//   }
//   reject({ status: "Please try again" });
// });
// console.log(promise2);

// target element in the dom
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => {
      addColor(2000, ".second", "orange");
    })
    .then(() => {
      addColor(3000, ".third", "blue");
    })
    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const el = document.querySelector(selector);
  const prom = new Promise((resolve, reject) => {
    if (el) {
      setTimeout(() => {
        el.style.color = color;
      }, time);
      resolve({ status: "works fine" });
    } else {
      reject({ status: `Theres is no such element: '${selector}'` });
    }
  });
  console.log(prom);
  return prom;
}
