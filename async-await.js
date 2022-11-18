// async - await
// async must be present before function call
// always return a promise
// await till a promise is settled
// error handling is try catch
const example = async () => {
  return "hello";
};
async function someFunc() {
  const res = await example();
}
someFunc();

const users = [
  { id: 1, name: "Lara" },
  { id: 1, name: "Lara" },
  { id: 1, name: "Lara" },
];

const articles = [
  { id: 1, articles: [12, 2312, 2434, 3434, 4343] },
  { id: 1, articles: [12, 2312, 2434, 3434, 4343] },
  { id: 1, articles: [12, 2312, 2434, 3434, 4343] },
];
