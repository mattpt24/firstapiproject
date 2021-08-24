$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b21270012b3703b9d19411ec934d947d",
    function(data) {
       console.log(data);


       var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
       $(".icon").attr("src", icon);

       var weatherdata = data.weather[0].description;
       $(".weather-data").append(weatherdata);

       var temperature = data.main.temp;
       $(".weather-temp").append(temperature + " Degrees");  

       var numberOfClouds = data.clouds.all;
       $(".number-of-clouds").append(numberOfClouds + " Clouds");
});


$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=San-Antonio,usa&appid=b21270012b3703b9d19411ec934d947d",
    function(data) {
       console.log(data);


       var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
       $(".icon2").attr("src", icon);

       var weatherdata = data.weather[0].description;
       $(".weather-data2").append(weatherdata);

       var temperature = data.main.temp;
       $(".weather-temp2").append(temperature + " Degrees");  

       var numberOfClouds = data.clouds.all;
       $(".number-of-clouds2").append(numberOfClouds + " Clouds");
});


$.getJSON("https://catfact.ninja/fact", function(data) {
console.log(data);

var myCatFact = data.fact;
$(".cat-fact").append(myCatFact);
});


$.getJSON("https://dog.ceo/api/breeds/image/random", function(data){
console.log(data);

var dogPic = data.message;
$(".dog-pics").attr("src", dogPic);
});



$.getJSON("https://official-joke-api.appspot.com/random_joke", function(data){
console.log(data);

var setUp = data.setup;
var punchLine = data.punchline;

$(".joke-setup").append(setUp);
$(".joke-punchline").append(punchLine);
});


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.579290, lng: -0.393780 },
    zoom: 13,
  });
}



$.getJSON("https://www.boredapi.com/api/activity", function(data){
console.log(data)

var theActivity = data.activity;
$(".something-to-do").append(theActivity);
});