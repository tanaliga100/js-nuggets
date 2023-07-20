// HANDLING ERROR IN THE NETWORK | SERVER

const url = "https://www.course-api.com/react-tours-project";

const getTours = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const msg = `There was an error : ${res.status} - ${res.statusText}`;
      throw new Error(msg);
    }
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log("CATCH BLOCK", error);
  }
};
const btn = document.querySelector(".btn").addEventListener("click", getTours);

// if (!res.ok) {
//       const msg =
//         "There was an error fetching" + res.status + " " + res.statusText;
//       throw new Error(msg);
//     }
