/***************************************************************************
    This program gets the curent day and then decides if it should display a 
    preselected message based on what day it is. 
****************************************************************************/


let today = new Date();
let daynumber = today.getDay();

if(daynumber == 6){document.getElementById('Message').setAttribute("Class", "show")}
else {document.getElementById("Message").setAttribute("class","noshow")}