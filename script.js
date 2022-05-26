const $weatherData = $(".weatherInfo")
const $temp = $(".temp")
const $weatherButton = $('#weatherButton')
const url = 'https://api.openweathermap.org/data/2.5/weather?q=miami&appid=3b717e6f360214f96b435a06ddd53a75&units=imperial'

//gets data
    function getData (event){

      //prevents errors
    event.preventDefault();
    //ajax request
    $.ajax(url).then(function(data){
        console.log(data)

    //get temperature data
    $temp.html(function(){
        let info = data.main
        let temp = info.temp
    $(".temp").append(temp);
        console.log(temp)
    })
    //get weather data. append 
    $weatherData.html(function(){
        let sky = data.weather
        let clouds = sky[0].descriptiongit 
    $(".weatherInfo").append(clouds);
        console.log(clouds)
    })})}
    //button for request
    $weatherButton.on('click', getData)


// initializes the variable slideIndex to 1 == (sets the index of the picture in the slideshow to 1)
//slideIndex will hold the initial index of the slideshow. (the visible image)
let slideIndex = 1;

// calls the main function 'showSlides' and passes in the 1 from above == shows first slide

showSlides(slideIndex);

// calls function for slideshow to move to next picture
// this function accepts a paramenter that must be a #
// this # === (n) is the index of the picture to show 
// this function will loop through the gallery and show the image with the index passed to the function --- and hides other images
function showSlides(n) {

// declared an empty variable for iterating (adding)
  let i;

  // this variable selects the elements from the DOM (HTML) with class name pictures
  let slides = document.getElementsByClassName("pictures");

  // if we reach the end of the list (gone past last slide) .... set the index back to 0 (first slide). 
  if (n > slides.length) {
    slideIndex = 1;
  }

  // if we go backwards (user clicks left arrow first) set index to last slide. 
  if (n < 1) {
    slideIndex = slides.length;
  }

  // loop over (iterate) through all the slides and do whats in the {} to each slide. (remove all slides from the DOM and set the display style of all slides to none)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

// set the display style of index slideIndex -1 to block... making it visible since it was previously hidden. 
  slides[slideIndex -1].style.display = "block";
}

// arrows === next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}



