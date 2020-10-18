window.onload = function(){PopupMessage()}
window.onload = function(){navigation()}


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

  function navigation()
  { 
   var ActivePage = document.URL;
   var ActiveHREF = ActivePage.substr(ActivePage.lastIndexOf("/"));
   document.getElementById(ActiveHREF).style.backgroundColor = "#2c3531";
  }