// Fetch API

fetch("/data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector("#destinations");
    data.destinations.forEach((destination) => {
      const li = document.createElement("li");

      list.appendChild(li);
      li.innerHTML = `
      <a href="destination.html?id=${destination.id}">
      <img src="img/${destination.image}">
      <h2>${destination.title}</h2>
      </a>
      `;
    });
  });
