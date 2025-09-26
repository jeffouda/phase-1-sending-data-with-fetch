// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  };

  // Return the fetch chain so tests can detect it
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => {
      // Append the new id to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = object.id;
      body.appendChild(p);
    })
    .catch((error) => {
      // Append the error message to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}
