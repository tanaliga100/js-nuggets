const scores = [67, 87, 100, 76, 98];

// at method
const last = scores[scores.length - 1];
console.log(last);

const last2 = scores.at(2);
console.log(last2);

// top level await

const url = "https://www.course-api.com/react-tours-project";

const res = await fetch(url);
const data = await res.json();
console.log("data", data);
