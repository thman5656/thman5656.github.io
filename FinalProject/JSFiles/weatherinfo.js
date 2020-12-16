const apiURL3 = "https://api.openweathermap.org/data/2.5/onecall?lat=20.508329&lon=-86.945831&exclude=hourly&units=imperial&appid=3e074a7b1c6ba46967ac59da14edcdbf";

//Go fetch it and then wait for a response.
fetch(apiURL3)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
   document.getElementById('currenttemp').innerHTML="Currently: " + weatherinfo.current.temp;
   document.getElementById('description').innerHTML=weatherinfo.current.weather[0].description;
   document.getElementById('feelslike').innerHTML=weatherinfo.current.feels_like;
   document.getElementById('Hummidity').innerHTML=weatherinfo.current.humidity;
  // document.getElementById('Alerts').innerHTML=weatherinfo.alerts.events;
    
  

  function formateDate(unixDate){
    const milliseconds = unixDate * 1000;
    const dateObject = new Date(milliseconds);

    let current_datetime = dateObject;
    let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear()
    return formatted_date;

  }

  const DayOne = weatherinfo.daily[0].dt;
  document.getElementById('dayone').innerHTML=formateDate(DayOne);
  document.getElementById('donemax').innerHTML=weatherinfo.daily[0].temp.max;
  document.getElementById('donemin').innerHTML=weatherinfo.daily[0].temp.min;
  document.getElementById('donetemp').innerHTML=weatherinfo.daily[0].temp.day;


  const Daytwo = weatherinfo.daily[1].dt;
  document.getElementById('daytwo').innerHTML = formateDate(Daytwo);
  document.getElementById('dtwomax').innerHTML=weatherinfo.daily[1].temp.max;
  document.getElementById('dtwomin').innerHTML=weatherinfo.daily[1].temp.min;
  document.getElementById('dtwotemp').innerHTML=weatherinfo.daily[1].temp.day;




  const Daythree = weatherinfo.daily[2].dt;
  document.getElementById('daythree').innerHTML = formateDate(Daythree);
  document.getElementById('dthreemax').innerHTML = weatherinfo.daily[2].temp.max;
  document.getElementById('dthreemin').innerHTML = weatherinfo.daily[2].temp.min;
  document.getElementById('dthreetemp').innerHTML = weatherinfo.daily[2].temp.day;


 }); 
 