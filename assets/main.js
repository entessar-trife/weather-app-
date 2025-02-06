const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weatherIcon")
const weather = document.querySelector(".weather")

searchBtn.addEventListener("click", () => {
  const city = searchBox.value
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=caf390576e7ed57481854f573df28f63`)
      .then((res) => res.json())
      .then((res) => {
        // if city is not found
        if (res.cod == "404") {
          document.querySelector(".error").style.display = "block"
          document.querySelector(".weather").style.display = "none"
        }
        // if city is found
        else if (city) {
          console.log(res);
          document.querySelector(".cityName").innerHTML = res.name;
          document.querySelector(".temp").innerHTML = Math.round(res.main.temp) + " °C";
          document.querySelector(".humidity").innerHTML = res.main.humidity + " %";
          document.querySelector(".wind").innerHTML = res.wind.speed + " km/h";
          if (res.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/images/clouds.png"
          } else if (res.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/images/clear.png"
          } else if (res.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/images/rain.png"
          } else if (res.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/images/mist.png"
          } else if (res.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/images/drizzle.png"
          } else if (res.weather[0].main == "Snow") {
            weatherIcon.src = "./assets/images/snow.png"
          }
          document.querySelector(".weather").style.display = "block"
          document.querySelector(".error").style.display = "none"
        }
      })
  } else {
    alert("please enter city")
  }
})