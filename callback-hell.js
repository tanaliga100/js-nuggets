// CALLBACK HELL IN ACTION

// after 1s first red;
// after 3s second blue;
// after 2s third green;
// IN SEQUENCE

const container = document.querySelector(".container");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  let prompt = (document.createElement("div").innerHTML = "Rendering...");
  container.append(prompt);
  setTimeout(() => {
    third.style.color = "red";

    first.style.display = "block";

    setTimeout(() => {
      third.style.color = "green";

      second.style.display = "block";

      setTimeout(() => {
        third.style.color = "blue";
        third.style.display = "block";
        btn.style.display = "block";
        btn.textContent = "Click Me";
      }, 3000);
    }, 2000);
  }, 1000);
});
