const searchButton = document.querySelector("#searchIcon");
const cityCountry = document.querySelector(".city_country");
const temperature = document.querySelector(".temp");
const weatherDescription = document.querySelector(".weather_description");

const apiKey = "309686f5d1b5556701ea19ed878a2fa1";

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod == "404") {
      cityCountry.innerHTML = "location not found";
    } else {
      cityCountry.innerHTML = data.name;
      const integerTemp = Math.round(data.main.temp);
      temperature.innerHTML = `${integerTemp}°C`;
      weatherDescription.innerHTML = data.weather[0].description;
      console.log(weatherDescription);
    }

    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;

    const currentTime = new Date().getTime() / 1000;

    const weatherConditions = data.weather[0].main;
    const isRaining = weatherConditions === "Rain";
    const isSunny = weatherConditions === "Clear";
    const isCloudy = weatherConditions === "Clouds";
    const isSnowing = weatherConditions === "Snow";
    const isHaze = weatherConditions === "Haze";
    const isDrizzle = weatherConditions === "Drizzle";

    console.log(weatherConditions);

    let image;

    switch (true) {
      case isRaining && currentTime > sunrise && currentTime < sunset:
        // it's daytime and raining
        image = "day-raining.png";
        break;
      case isSunny && currentTime > sunrise && currentTime < sunset:
        // it's daytime and sunny
        image = "day-clear.png";
        break;
      case isCloudy && currentTime > sunrise && currentTime < sunset:
        // it's daytime and cloudy
        image = "day-cloudy.png";
        break;
      case isSnowing && currentTime > sunrise && currentTime < sunset:
        // it's daytime and snowing
        image = "day-snowing.png";
        break;
      case isHaze && currentTime > sunrise && currentTime < sunset:
        // it's daytime and hazy
        image = "day-haze.png";
        break;
      case isDrizzle && currentTime > sunrise && currentTime < sunset:
        // it's daytime and drizzle
        image = "day-drizzle.png";
        break;

      case isRaining && currentTime > sunset:
        // it's nighttime and raining
        image = "night-raining.png";
        break;
      case isSunny && currentTime > sunset:
        // it's nighttime and sunny
        image = "night-clear.png";
        break;
      case isCloudy && currentTime > sunset:
        // it's nighttime and cloudy
        image = "night-cloudy.png";
        break;
      case isSnowing && currentTime > sunset:
        // it's nighttime and snowing
        image = "night-snowing.png";
        break;
      case isHaze && currentTime > sunset:
        // it's nighttime and hazy
        image = "night-haze.png";
        break;
      case isDrizzle && currentTime > sunset:
        // it's nighttime and drizzle
        image = "night-drizzle.png";
        break;
      default:
        // default image
        image = "";
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

searchButton.addEventListener("click", () => {
  const inputField = document.querySelector("#userInput").value;

  getWeatherData(inputField);
});
