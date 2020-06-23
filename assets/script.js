$(document).ready(function(){
const apiKey="c35f63e9e9877a8a427560e580212741"

$("#searchCity").on("click",function(event){
    event.preventDefault();
    console.log("it works");
    
var cityName=$("#cityName").val();

localStorage.setItem(cityName,cityName);
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+apiKey; 


wAjax(queryURL);

});

// set up ajax
function wAjax(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $("#weatherDetails").empty();
        console.log(response);
      var weatherDetails=$("#weatherDetails");
        var h3=$("<h3>").text(response.name);
        weatherDetails.append(h3);
    var icon=response.weather[0].icon;
    var image=$("<img>").attr("src","http://openweathermap.org/img/wn/"+icon+"@2x.png");
    weatherDetails.append(image);
  
    
    })    
}

































})