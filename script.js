$(document).ready(function(){
const apiKey="c35f63e9e9877a8a427560e580212741"

$("#searchCity").on("click",function(event) {
    event.preventDefault();
var cityName=$("#cityName").val();

localStorage.setItem(cityName,cityName);
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid="+apiKey;   
    
})




















})