// avoid the callback hell
// create new instance and has a callback function
// has 3 states : pending, rejected, fulfilled

const promise = new Promise((resolve, reject) => {
  resolve({ state: [1, 232, 23123] });

  reject({ error: "Dont Work" });
})
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => console.log(error));

console.log(promise);

// TARGET ELEMENT IN THE DOM

// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => {
      addColor(2000, ".second", "orange");
    })
    .then(() => {
      addColor(3000, ".third", "blue");
    })
    // any use of "then"s will not spits any problem
    .then(() => console.log("third"))
    .then(() => console.log("fourth"))

    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const el = document.querySelector(selector);
  const promise = new Promise((resolve, reject) => {
    if (el) {
      setTimeout(() => {
        el.style.color = color;
      }, time);
      resolve({ status: "works fine" });
    } else {
      reject({ status: `Theres is no such element: '${selector}'` });
    }
  });
  console.log(promise);
  return promise;
}

// USING PROMISE.ALL
function printName(arg) {
  console.log(`This is the name : ${arg}`);
}
function sayHello(arg) {
  console.log(`${arg} !!!! `);
}
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  Promise.all([
    printName("Jordan100"),
    sayHello("Hello World"),
    setTimeout(() => {
      alert("Done");
    }, 5000),
  ]).catch((error) => console.log(error));
});

// BASIC EXAMPLE

const value = 2;
export const request = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log("randomNumber", randomNumber);
  if (randomNumber === value) {
    resolve("you guess the number correctly");
  } else {
    reject("wrong number");
  }
});

request.then((data) => console.log(data)).catch((err) => console.log(err));

// REAL WORLD EXAMPLE

function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        resolve({ msg: "Here is the data", data });
      })
      .catch((error) => {
        reject({ msg: "Oppps", error });
      });
  });
}
const url = "https://randomuser.me/api";
const response = makeHttpRequest(url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
