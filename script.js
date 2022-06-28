const $weatherData = $(".weatherInfo");
const $temp = $(".temp");
const $weatherButton = $("#weatherButton");
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=miami&appid=3b717e6f360214f96b435a06ddd53a75&units=imperial";

//Gets Data
function getData(event) {
  //Prevents errors
  event.preventDefault();
  //Ajax request
  $.ajax(url).then(function (data) {
    console.log(data);

    //Get Temperature Data
    $temp.html(function () {
      let info = data.main;
      let temp = info.temp;
      $(".temp").append(temp);
      console.log(temp);
    });

    //Get Weather Data
    $weatherData.html(function () {
      let sky = data.weather;
      let clouds = sky[0].descriptiongit;
      $(".weatherInfo").append(clouds);
      console.log(clouds);
    });
  });
}

//Button for request
$weatherButton.on("click", getData);

