// WHAT IS REDUCE

//iterates over the array and has the callback function
//reduces array to a single value which can array number or object
// passed in 2 parameters. first is a total of all calculations
// and then the second parameter is the current iteration

// const staff = [
//   { name: "lara", age: 20, salary: 20000, position: "dev" },
//   { name: "kimmy", age: 40, salary: 10000, position: "designer" },
//   { name: "inna", age: 30, salary: 30000, position: "project-manager" },
// ];

// const getInfo = function () {};

// const calculateSalary = staff.reduce(
//   (totalSalary, person) => {
//     console.log("totalSalary", totalSalary.theTotalSalary);
//     console.log("person", person.salary);
//     totalSalary.others += person.salary;
//     return totalSalary;
//   },
//   {
//     theTotalSalary: 0,
//     others: 10,
//   }
// );

// console.log(calculateSalary);

const instruments = [
  { instrumentName: "guitar", price: 500.0, amount: 1 },
  { instrumentName: "piano", price: 300.0, amount: 1 },
  { instrumentName: "piano", price: 200.0, amount: 1 },
  { instrumentName: "ukelele", price: 100.0, amount: 1 },
];

// const uniqueValue = [
//   ...new Map(
//     instruments.map((item) => [item["instrumentName"], item])
//   ).values(),
// ];

const getInformation = instruments.reduce(
  (total, item) => {
    const { price, amount, instrumentName } = item;
    // get the total price depending on the amount
    total.totalAmount += amount * price;
    // get the total
    total.cartTotal = total.cartTotal + amount;
    total.instruments.push(instrumentName);
    return total;
  },

  {
    cartTotal: 0,
    totalAmount: 0,
    instruments: [],
  }
);
console.log(getInformation);
