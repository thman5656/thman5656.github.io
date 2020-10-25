/***************************************************************************
    * programm gets two variables from the webparg the temp and the wind speed
    * the program calculates the windshill and outputs it. 
    * Output: The Wind Chill Temperature.
****************************************************************************/
    let Temperature= parseFloat(document.getElementById("currentHigh").textContent);
    let Windspeed= parseFloat(document.getElementById("wind").textContent);

    if (Temperature <= 50 || Windspeed > 3.0)
        {
            let windChill = 35.74 + 0.6215 * Temperature - 35.75 * Math.pow(Windspeed, 0.16) + 0.4275 *Temperature * Math.pow(Windspeed, 0.16);
            let windchillRounded = Math.round(windChill * 100) / 100;
            document.getElementById("windChill").innerText = windchillRounded;
        }
    else
        {
            document.getElementById("windChill").innerText = " - ";
        }       