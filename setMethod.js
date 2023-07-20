// SET METHOD = stores a collection of unique values of any type;

// new Set()
// add(value)
// delete(value)
// clear(value)
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const lists = ["guitar", "piano", "drums"];
unique.add("first");
unique.add(lists);
unique.add("third");
console.log([...unique]);

// DELETE
const toDelete = unique.delete(lists);
console.log(toDelete);

// HAS
const isValue = unique.has(4);
console.log(isValue);

// accepts iterable objects
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
const companies = products.map((item) => {
  return item.title;
});
console.log(companies);

// UNIQUE USING SET METHOD
const uniqueComps = new Set(companies);
console.log(uniqueComps);
// TURNS IT INTO ARRAY USING SPREAD OPERATOR
const final = ["All", ...uniqueComps];
console.log(final);
