//need to use JS to make the menu items show the active page 
//need to use JS to show date in the footer 

window.onload = function(){lastModDate()}
window.onload = function(){PopupMessage()}
function lastModDate()
  {
    const CurrentDate = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
  document.getElementById("lastModDate").innerHTML = new Date().toLocaleDateString("en-US", CurrentDate);
  }

function toggleMenu()
  { 
  let curmenu = document.getElementById('navigation').classList;
  if (curmenu == "noshow"){document.getElementById('navigation').setAttribute("class","shownav");}
  else if (curmenu == "shownav"){document.getElementById('navigation').setAttribute("class","noshow");}  
  else{window.alert("stupid");}
  }

function PopupMessage()
  {
    let today = new Date();
    let daynumber = today.getDay();

    if(daynumber == 6){document.getElementById('Message').setAttribute("Class", "show")}
    else {document.getElementById("Message").setAttribute("class","noshow")}
  }