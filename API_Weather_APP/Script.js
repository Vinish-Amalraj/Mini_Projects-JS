const search = document.getElementById("search");
const Search_btn = document.getElementById("Search_btn");
const City = document.getElementById("City");
const Weather = document.getElementById("Weather");
const Temp = document.getElementById("Temp");
const image = document.getElementById("img");
const API_Key = "fd646088a5e1c75f961a3e0f971b7715";

const get_weather = async (city_name) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}&units=metric`
    );
    const result = await response.json();
    console.log(result);
    show(result);
  } catch (error) {
    console.error(error);
  }
};

Search_btn.addEventListener("click", () => {
  let city_name = search.value;
  console.log(city_name);
  get_weather(city_name);
});

const show = (data) => {
  City.innerText = `${data.name}`;
  Weather.innerText = `${data.weather[0].main}`;
  Temp.innerText = ` ${data.main.temp}°`;
  if (data.weather[0].main === "Clear") {
    image.src = "Image/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    image.src = "Image/clouds.png";
  } else if (data.weather[0].main === "Rain") {
    image.src = "Image/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    image.src = "Image/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    image.src = "Image/mist.png";
  } else if (data.weather[0].main === "Snow") {
    image.src = "Image/snow.png";
  }
};
