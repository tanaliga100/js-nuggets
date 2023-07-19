// async - await
// async must be present before function call
// always return a promise
// await till a promise is settled
// error handling is try catch

// ASYNC bare minimum
const example = async () => {
  return "hello there";
};

// AWAIT bare minimum
async function someFunc() {
  const res = await example();
  console.log(res);
  console.log("hello world");
}

const users = [
  { id: 1, name: "jordan100" },
  { id: 2, name: "martin100" },
  { id: 3, name: "elton100" },
];

const articles = [
  {
    id: 1,
    articles: ["one", "two", "three"],
  },
  { id: 2, articles: ["four", "five", "six"] },
  { id: 3, articles: ["seven", "eight", "nine", "ten"] },
];

// USING PROMISES
// getUser("jordan100")
//   .then((user) => {
//     return getArticles(user.user.id);
//   })
//   .then((data) => console.log("ARTICLES", data))
//   .catch((error) => console.log(error));

// USING ASYNC AWAIT
const getData = async () => {
  try {
    const user = await getUser("jordan100");
    const articles = await getArticles(user.user.id);
    console.log(articles);
    return articles;
  } catch (error) {
    console.log(error);
  }
};

getData();

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve({ msg: "Success", user });
    } else {
      reject({ msg: "Ooppps... No User Found with this name : " + name });
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.id === userId);
    if (userArticles) {
      return resolve({
        msg: "Success",
        userArticles,
      });
    } else {
      reject({ msg: "Ooppps... No User Found with this name : " + userId });
    }
  });
}
