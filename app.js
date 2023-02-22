const apiKey = "9c86b940596734a47534b2367b2e030f";

function getCityData(city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
      try {
        if (response.cod === 200) showDataOnScreen(response);
        else alert("Algo deu errado");
      } catch (error) {
        console.error(error);
      }
    })
    .catch((err) => console.log(err));
}

function kToC(temperature) {
  return Math.round(temperature - 273.15);
}

async function showDataOnScreen(response) {
  console.log({ response });
  let main = document.getElementById("main");
  let weather = document.createElement("div");
  let { icon: iconCode, description } = response.weather[0];
  icon = await fetch(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  console.log({ icon });
  temperature = response.main.temp;
  temperature = kToC(temperature);
  main.innerHTML = "";
  weather.innerHTML = `<img src="${icon.url}"><br>
                         ${response.name}<br>
                         ${description}<br>
                         ${temperature} ºC`;
  main.appendChild(weather);
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  let city = document.getElementById("input").value;
  event.preventDefault();
  getCityData(city);
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  const city = localStorage.getItem("city");
  document.getElementById("input").value = city;
  getCityData(city);
}
