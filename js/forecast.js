
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Nairobi,ke&units=metric&APPID=a415fe87ebd01ac052edc3bd0a7ad80c')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<4; i++){
        document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp).toFixed(1)+ "°C";
        document.getElementById("day" + (i+1) + "Hum").innerHTML = "Humidity: " + Number(data.list[i].main.humidity).toFixed(1)+ "%";
        document.getElementById("day" + (i+1) + "Cond").innerHTML = String(data.list[i].weather[0].description);
    }
    //------------------------------------------------------------
    
    //Getting Weather Icons
     for(i = 0; i<4; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})





//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<4; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }