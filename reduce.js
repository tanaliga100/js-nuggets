// REDUCE METHOD
// iterates over the arrays and we get a callback function
// reduces to a single value could a number || array || object
// has 2 parameters
// 1st accumulator which is the total
// 2nd is the iterator which is the current iteration or value

// SAMPLE USING NUMBERS
// const staff = [
//   { name: "Lara", age: 61, position: "dev", salary: 113123 },
//   { name: "Dan", age: 51, position: "jr", salary: 2231 },
//   { name: "Jenn", age: 11, position: "tl", salary: 35665 },
//   { name: "Inna", age: 31, position: "mid", salary: 403543 },
//   { name: "Kimmy", age: 21, position: "dev", salary: 50645654 },
// ];

// const totalSalary = staff.reduce((acc, i) => {
//   //   console.log("total", acc);
//   //   console.log("person salary", i.salary);
//   acc += i.salary;
//   return acc;
// }, 0);

// // SAMPLE USING OBJECTS

// const cart = [
//   { name: "cp", price: 199.2313, amount: 1 },
//   { name: "desktop", price: 299.5345, amount: 2 },
//   { name: "tablet", price: 399.4535, amount: 3 },
//   { name: "tv", price: 799.5434, amount: 4 },
//   { name: "monitor", price: 699.23132, amount: 5 },
// ];
// const instruments = {
//   instumentName: "guitar",
//   brand: "Yamaha",
//   price: 699.23132,
// };

// let { totalItems, cartTotal } = cart.reduce(
//   function (acc, item) {
//     const { price, amount } = item;
//     // count the items
//     acc.totalItems += amount;
//     // count the sum
//     acc.cartTotal += amount * price;
//     return acc;
//   },
//   {
//     totalItems: 0,
//     cartTotal: 0,
//   }
// );
// cartTotal = parseFloat(cartTotal.toFixed(2));
// // console.log(totalItems, cartTotal);
// const states = {
//   name: "dan",
//   others: ["guitar", "piano", "drums"],
// };

// const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

// const fetchRepos = async () => {
//   try {
//     const response = await fetch(url);
//     const resolve = await response.json();
//     const newData = resolve.reduce((accumulator, item) => {
//       const { language } = item;
//       if (accumulator[language]) {
//         accumulator[language] = accumulator[language] + 1;
//       } else {
//         accumulator[language] = 1;
//       }
//       return accumulator;
//     }, {});
//     states.repos = Object.assign({ newData });
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// fetchRepos();

//  EXAMPLE USING NUMBERS AS DEPENDENCY
const staff = [
  { name: "jordan100", age: 61, position: "dev", salary: 100 },
  { name: "martin100", age: 51, position: "jr", salary: 200 },
  { name: "will100", age: 11, position: "tl", salary: 300 },
  { name: "johnny100", age: 31, position: "mid", salary: 400 },
  { name: "guy100", age: 21, position: "dev", salary: 500 },
];

const dailyTotal = staff.reduce((accumulator, person) => {
  // console.log(accumulator, person.salary);
  accumulator += person.salary;
  return accumulator;
}, 0);

// console.log("DAILY TOTAL :", dailyTotal);

//  EXAMPLE USING OBJECTS AS DEPENDENCY
const cart = [
  { name: "cp", price: 199.2313, amount: 1 },
  { name: "desktop", price: 299.5345, amount: 2 },
  { name: "tablet", price: 399.4535, amount: 3 },
  { name: "tv", price: 799.5434, amount: 4 },
  { name: "monitor", price: 699.23132, amount: 5 },
];

let totalAmount = cart.reduce(
  (accumulator, cart) => {
    const { price, amount } = cart;

    // count items;
    accumulator.totalItems += amount;
    //  multiply the amount to its price;
    accumulator.cartTotal = amount * price;

    return accumulator;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
// FORMAT TO THE NUMBER WITH TOFIXED() METHOD
totalAmount.cartTotal = Number(totalAmount.cartTotal.toFixed(2));

// console.log("TOTAL AMOUNT : ", totalAmount);

//  EXAMPLE USING ARRAY AS DEPENDENCY
const uri = "https://api.github.com/users/tanaliga100/repos?per_page=100";

// fetch the endpoint
const fetchRepos = async () => {
  const response = await fetch(uri);
  const data = await response.json();
  console.log("DATA", data);
  const newData = data.reduce((accumulator, repo) => {
    const { language } = repo;
    if (language) {
      if (accumulator[language]) {
        accumulator[language] = accumulator[language] + 1;
      } else {
        accumulator[language] = 1;
      }
    }

    return accumulator;
  }, {});
  console.log("NEW DATA", newData);
};

fetchRepos();
