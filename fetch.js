// fetch api

const url = `https://www.course-api.com/react-tours-project`;
const uri = `https://randomuser.me/api`;

const state = {
  user: [],
  msg: "",
};

// USING PROMISES
const fetchData = (endpoint) => {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        resolve({ msg: "success", data });
      })
      .catch((error) => {
        reject({ msg: "failed", error });
      });
  });
};

const endpoint = "https://jsonplaceholder.typicode.com/todos";
fetchData(endpoint)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// USING ASYNC-AWAIT
const getData = async () => {
  try {
    const res = await fetchData();
    //     console.log(res);
    state.msg = res.msg;
    state.user.push(res.data.results);
  } catch (error) {
    console.log(error);
  }
};
getData();

// console.log("STATE", state);

// BARE MINUMUM
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
