//need to use JS to make the menu items show the active page 
//need to use JS to show date in the footer 

window.onload = function(){lastModDate()}
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