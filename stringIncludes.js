// CHECK whether string contains another string;
// use case * some search func based on text;

const firstName = "jordan100";
const res = firstName.includes("jo", 0); // second parameter is the index where to start
// console.log(res);

const products = [
  {
    title: "guitar",
    company: "Fender",
  },
  {
    title: "piano",
    company: "Yamaha",
  },
  {
    title: "keyboards",
    company: "Roland",
  },
  {
    title: "guitar",
    company: "PRS",
  },
  {
    title: "piano",
    company: "Kawai",
  },
];
// target the DOM
const data = document.querySelector("#result");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

// RENDER PRODUCTS
function renderProducts(productsArray) {
  data.innerHTML = "";

  productsArray.forEach((item) => {
    const productElement = document.createElement("li");
    productElement.textContent = `Title ${item.title} - Company ${item.company}`;
    data.appendChild(productElement);
  });
}

// initial rendering...
renderProducts(products);

input.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log("click", searchString);

  // filter the product based on the inputs

  const filteredProducts = products.filter((item) => {
    return (
      item.company.toLowerCase().includes(searchString) ||
      item.title.toLowerCase().includes(searchString)
    );
  });
  renderProducts(filteredProducts);
});
