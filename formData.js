// THIS IS THE MOST COMMON NEED IF YOU ARE F-E DEV
// NEED TO KNOW THE SEQUENCE
// TARGETING THE DOMS
// EVENT LISTENERS
// SUBMITTING
// CLEARING THE FORMS

// 1. CREATE AN ELEMENT
const container = document.createElement("main");
const form = document.createElement("form");
const nameInput = document.createElement("input");
const emailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const genderRadio = document.createElement("div"); // Create a div to hold the radio buttons
const statusSelect = document.createElement("select"); // Use select element for the status
const submitButton = document.createElement("button");

// 2. SET THE ATTRIBUTES AND CLASSES
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "Enter a name...");
nameInput.classList.add("name");

emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Enter a valid email...");
emailInput.classList.add("email");

passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "Enter a valid password...");
passwordInput.classList.add("password");

// Radio buttons for gender
const maleRadio = document.createElement("input");
maleRadio.setAttribute("type", "radio");
maleRadio.setAttribute("name", "gender");
maleRadio.setAttribute("value", "male");
maleRadio.textContent = "Male";

const femaleRadio = document.createElement("input");
femaleRadio.setAttribute("type", "radio");
femaleRadio.setAttribute("name", "gender");
femaleRadio.setAttribute("value", "female");
femaleRadio.textContent = "Female";

// Checkbox for status
const statusCheckbox = document.createElement("input");
statusCheckbox.setAttribute("type", "checkbox");
statusCheckbox.setAttribute("name", "status");
statusCheckbox.setAttribute("value", "active");
statusCheckbox.textContent = "Active";

// Options for the select box
const option1 = document.createElement("option");
option1.value = "student";
option1.textContent = "Student";

const option2 = document.createElement("option");
option2.value = "professional";
option2.textContent = "Professional";

// Append the options to the select box
statusSelect.appendChild(option1);
statusSelect.appendChild(option2);

submitButton.setAttribute("type", "submit");
submitButton.classList.add("btn");
submitButton.textContent = "Submit";

// 3. APPEND ELEMENTS TO THE FORM
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(passwordInput);

// Append radio buttons to the genderRadio div
genderRadio.appendChild(maleRadio);
genderRadio.appendChild(femaleRadio);

form.appendChild(genderRadio); // Append the genderRadio div to the form
form.appendChild(statusSelect); // Append the select box to the form
form.appendChild(statusCheckbox); // Append the checkbox to the form

form.appendChild(submitButton);

container.appendChild(form);
container.classList.add("container");

// 4. APPEND THE CONTAINER TO THE BODY OR THE ROOT
document.body.appendChild(container);

// 5. CONNECT EVENT LISTENERS

// * THIS IS THE TRADITIONAL WAY.,,,,,,,

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameValue = nameInput.value;
//   const emailValue = emailInput.value;
//   const passwordValue = passwordInput.value;

//   // check validation and return if false;
//   if (!nameValue || !emailValue || !passwordValue) {
//     alert("Fields are required");
//     return;
//   }
//   //   console.log("traditional way", nameValue, emailValue, passwordValue);
//   nameInput.value = "";
//   emailInput.value = "";
//   passwordInput.value = "";
// });

// * USING THE FORM DATA .......
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  console.log("formData", formData);
  const entries = [...formData.entries()];
  console.log("entries", entries);
  const values = [...formData.values()];
  console.log("values", values);
  const keys = [...formData.keys()];
  console.log("keys", keys);

  // iterate over with for-of
  for (let [name, value] of formData) {
    console.log("prop", value);
  }
});
