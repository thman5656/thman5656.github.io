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
 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) 
        {
            if(towns[i].name == "Fish Haven"){
            
            let eventsSection = document.createElement('section');
            let title = document.createElement('h2');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');
           

            title.textContent = "Town Events";
            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];
            
            
            eventsSection.appendChild(title);
            eventsSection.appendChild(event1);
            eventsSection.appendChild(event2);
            eventsSection.appendChild(event3);
   
            
            document.getElementById("currentevents").appendChild(eventsSection);
        }};
            
    });