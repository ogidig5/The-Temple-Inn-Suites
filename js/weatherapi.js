const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Nairobi,ke&units=metric&APPID=a415fe87ebd01ac052edc3bd0a7ad80c";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#current-temp").textContent = jsObject.main.temp.toFixed(0);
    document.querySelector("#humidity").textContent = jsObject.main.humidity.toFixed(0);
    document.querySelector("#condition").textContent = jsObject.weather[0].description;
    document.querySelector("#speed").textContent = jsObject.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // const desc = jsObject.weather[0].description;
    // document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weather-icon").setAttribute("src", iconsrc);
    // document.querySelector("figcaption").textContent = desc;
  });
