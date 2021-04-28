async function getData(data) {
  try {
    const response = await fetch(data);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Setup My Anime
var myAnime = {};
var myAnimeIndex = 0;
getData("myAnime.json").then((data) => {
  myAnime = data;
  navigate("previous");
});

function populateMyAnime(animeData) {
  document.querySelector("#description").textContent = animeData.description;
  document.querySelector("#coverArt").setAttribute("src", animeData.cover);
  document.querySelector("#title").textContent = animeData.title;
}

function navigate(direction) {
  if (direction === "previous" && myAnimeIndex > 0) {
    myAnimeIndex--;
  } else if (direction === "next" && myAnimeIndex < 4) {
    myAnimeIndex++;
  }
  populateMyAnime(myAnime.animes[myAnimeIndex]);
}

document.querySelectorAll(".btnNextPrevious").forEach((btn) =>
  btn.addEventListener("click", (event) => {
    navigate(event.target.id);
  })
);

// Setup Most Popular Five
let popularFive = {};
getData("popular.json").then((data) => {
  popularFive = data;
  var list = document.querySelector("#mostPopular");
  data.popularAnimes.forEach((anime) => {
    var item = document.createElement("li");
    item.textContent = `${anime.title} ${anime.Score}/10`;
    list.appendChild(item);
  });
});

// Setup Random Anime API

function getAnimeData() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://api.jikan.moe/v3/top/anime", requestOptions)
        .then(response => response.json())
        .then(data => displayRandomAnime(data))
        .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
  }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function displayRandomAnime(data) {
    index = getRandomInt(data.top.length - 1)
    document.querySelector('#animeTitle').textContent = data.top[index].title
    document.querySelector('#poster').setAttribute('src', data.top[index].image_url)
}

document.getElementById("random").addEventListener("click", (event) => {
    getAnimeData()
});
