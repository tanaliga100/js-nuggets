const scores = [84, 87, 99, 94, 98];

// old way
const last = scores[scores.length - 1];
console.log(last);

// using "AT" method
const last2 = scores.at(0);
console.log(last2);

const str = "jordan100";
console.log(str.at(0));

// top level await
const url = "https://www.course-api.com/react-tours-project";

const res = await fetch(url);
const data = await res.json();
console.log(data);

// introducing the uses of default export
