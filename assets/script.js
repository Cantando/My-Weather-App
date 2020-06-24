$(document).ready(function () {
    const apiKey = "c35f63e9e9877a8a427560e580212741"

    $("#searchCity").on("click", function (event) {
        event.preventDefault();
        console.log("it works");

        var cityName = $("#cityName").val();

        localStorage.setItem(cityName, cityName);
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;

        wAjax(queryURL);
        fAjax(queryURL2);
        renderCityName();
    });

    // set up ajax
    function wAjax(queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#weatherDetails").empty();
            console.log(response);
            var weatherDetails = $("#weatherDetails");
            var h3 = $("<h3>").text(response.name+"("+moment().format("LL")+")");
            weatherDetails.append(h3);
            var icon = response.weather[0].icon;
            var image = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
            weatherDetails.append(image);
            var temp = response.main.temp;
            var ptag = $("<p>").text("Temperature: " + temp + "°F");
            weatherDetails.append(ptag);
            var humidTag = response.main.humidity;
            var ptag = $("<p>").text("Humidity: " + humidTag + "%");
            weatherDetails.append(ptag);

        })
    }

    function fAjax(queryURL2) {
        $.ajax({
            url: queryURL2,
            method: "GET"

        }).then(function (response) {
            console.log(response);
            var i=5;
            for (let index = 1; index < 6; index++) {
                var date=moment().add(index,"day").format("L");
                var icon=response.list[i].weather[0].icon;
                var image=$("<img>").attr("src","http://openweathermap.org/img/wn/" + icon + "@2x.png");
                var card=$("#card"+index);
                var temp=response.list[i].main.temp;
                var humidity=response.list[i].main.humidity;
                $(card).empty();
                var ptag1=$("<p>").text(date);
                var ptag2=$("<p>").text("Temperature: " + temp + "°F");
                var ptag3=$("<p>").text("Humidity: " + humidity + "%");
            card.append(ptag1,image,ptag2,ptag3);
            i=i+8;
    

            }

        })

       

    }

    function renderCityName() {
        $(".empty").empty();
        for (let index = 0; index < localStorage.length; index++) {
     var ls=localStorage.getItem(localStorage.key(index));
     var button=$("<button>").addClass("tab btn btn-block btn-lg ").attr("data-city",ls).text(ls);
     $(".empty").append(button);
            
        }
        
    } 
$(document).on("click",".tab",function() {
    var cityName=$(this).data("city");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;
console.log(cityName);

        wAjax(queryURL);
        fAjax(queryURL2);
});





























})