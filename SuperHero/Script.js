// API
const Newactor = document.getElementById("Newactor");
let img = document.getElementById("img");
const Searchbtn = document.getElementById("Searchbtn");
const Searh = document.getElementById("Searh");
const User_token = 896737202235801;
const Main_URL = `https://www.superheroapi.com/api.php/${User_token}`;
const Actors = (id) => {
  fetch(`${Main_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const details = ShowHero(data);
      img.style.display = "inline";
      img.innerHTML = ` <img src="${data.image.url}" alt='${data.name} image'>`;
      img.innerHTML += `<h1>${data.name}</h1>`;
      img.innerHTML += `${details}`;
    });
};
const num = () => {
  totalHeros = 731;
  return Math.floor(Math.random() * totalHeros) + 1;
};
Newactor.onclick = () => Actors(num());

const SearchHero = (name) => {
  fetch(`${Main_URL}/search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const hero = data.results[0];
      img.innerHTML = ` <img src="${hero.image.url}" alt='${hero.name} image'>`;
      img.innerHTML += `<h1>${hero.name}</h1>`;
      img.innerHTML += `${ShowHero(hero)}`;
    });
};
Searchbtn.onclick = () => SearchHero(Searh.value);
Searh.oninput = () => {
  if (Searh.value !== "") {
    SearchHero(Searh.value);
    img.style.display = "inline";
  } else {
    img.style.display = "none";
  }
};
const ShowHero = (character) => {
  const stats = Object.keys(character.powerstats).map((stat) => {
    console.log(stat);
    console.log(character.powerstats[stat]);
    return `<p>${stat.toLocaleUpperCase()}:${character.powerstats[stat]}</p>`;
  });
  console.log(stats.join(""));
  return stats.join("");
};
