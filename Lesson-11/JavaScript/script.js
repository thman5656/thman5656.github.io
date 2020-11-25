//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appID=3e074a7b1c6ba46967ac59da14edcdbf";;
const date = new Date();
const todayDayNumber = date.getDay();
const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wedensday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";



//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.

    let mylist = weatherinfo.list;
    let forecastdayNumber = todayDayNumber;
    for(i=0; i < mylist.length; i++){
        let time = mylist[i].dt_txt;
        if(time.includes("21:00:00")){
      
          forecastdayNumber += 1; 
          if(forecastdayNumber === 7){forecastdayNumber = 0};

          let theDayName = document.createElement("span");
          theDayName.textContent = weekday[forecastdayNumber];

          let theTemp = document.createElement("p");
          theTemp.textContent = weatherinfo.list[i].main.temp + "\xB0";

          let iconcode = weatherinfo.list[i].weather[0].icon;
          let iconpath = "https://openweathermap.org/img/w/" + iconcode + ".png";
          let theIcon = document.createElement("img");
          theIcon.src = iconpath;

          let theDay = document.createElement("div")
          theDay.appendChild(theDayName);
          theDay.appendChild(theTemp);
          theDay.appendChild(theIcon);

          document.getElementById("weatherforecast").appendChild(theDay);

          }
    }

 }); //end of "then" fat arrow function

