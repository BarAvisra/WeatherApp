// const btn = document.querySelector("#btn1");
// const result = document.querySelector("#result");

// const apiKey = "309686f5d1b5556701ea19ed878a2fa1"

// async function getWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.cod == "404") {
//             result.innerHTML = "Country cannot be found!";
//         }
//         else {
//             result.innerHTML = `The temperature in ${city} is ${data.main.temp}°C`;
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// btn.addEventListener("click", () => {
//     const input = document.querySelector("#input1").value;
//     getWeatherData(input);
// })