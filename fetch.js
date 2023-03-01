// Fetch API
// index.html

const destinationList = document.querySelector(".destinationsList");

fetch("/data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    data.destinations.forEach((destination) => {
      destinationList.innerHTML += `
      <figure id="${destination.id}">
        <img src="./img/${destination.image}">
        <div>
        <span><i class="fa-regular fa-heart"></i></span>
        <a href="/destination.html?id=${destination.id}">More</a>
        </div>
      </figure>
      `;
    });
  });
