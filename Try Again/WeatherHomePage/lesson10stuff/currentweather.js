const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appID=3e074a7b1c6ba46967ac59da14edcdbf";


//Go fetch it and then wait for a response.
fetch(apiURL1)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById('current').innerHTML="Currently: " + weatherinfo.weather[0].description;
    document.getElementById('currentHigh').innerHTML=weatherinfo.main.temp_max;
    document.getElementById('wind').innerHTML=weatherinfo.wind.speed;
    document.getElementById('Hummidity').innerHTML=weatherinfo.main.humidity;
    

 }); //end of "then" fat arrow function
