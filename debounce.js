// delay the logic that is repeatedly called
const btn = document.querySelector(".btn");

function debounce(fn) {
  let timeoutId;
  return () => {
    console.log(timeoutId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, 1000);
  };
}

btn.addEventListener(
  "click",
  debounce(() => {
    console.log("called debounce");
  })
);
