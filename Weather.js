window.addEventListener("load", () => {
  let long;
  let lat;
  let apiKey = "3dab0660ed2744c8ba347bef48799d40";

  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let imgDvi = document.querySelector(".abc");
  //   let weatherIcon = document.querySelector(".weather-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}&lang=eng`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { timezone, temp, sunrise, sunset } = data.data[0];
          const { description, icon } = data.data[0].weather;
          let weatherIcon = document.createElement("img");

          // Set the weather icon class based on the icon code
          //   weatherIcon.className = "weather-icon fas fa-" + icon;

          // Set DOM Elements from the API
          temperatureDegree.textContent = Math.floor(temp);
          temperatureDescription.textContent = description;
          locationTimezone.textContent = timezone;
          weatherIcon.src =
            "https://cdn.weatherbit.io/static/img/icons/t01d.png";
          console.log(icon);
          imgDvi.appendChild(weatherIcon)
        });
    });
  }
});

// generateImageUrl
// input: icon string example: c02d
// output: https://cdn.weatherbit.io/static/img/icons/
//c02d.png
// https://cdn.weatherbit.io/static/img/icons/t01d.png
