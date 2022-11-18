// fetch api

const url = `https://www.course-api.com/react-tours-project`;

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const state = {
  tours: [],
};

const fetchData = async () => {
  try {
    const req = await fetch(url);
    return req.json();
  } catch (error) {
    throw new Error(error);
  }
};
fetchData().then((data) => {
  if (data) {
    state.tours.push(data);
    console.log("state", state);
  }
  return;
});
