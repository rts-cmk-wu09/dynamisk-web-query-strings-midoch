const params = new URLSearchParams(document.location.search);
const id = params.get("id");

fetch(`./data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("body").innerHTML += `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
        `;
  });
