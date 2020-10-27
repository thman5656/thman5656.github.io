


function toggleMenu()
  { 
    alert(daynumber );
  let curmenu = document.getElementById('navigation').classList;
  if (curmenu == "noshow"){document.getElementById('navigation').setAttribute("class","shownav");}
  else if (curmenu == "shownav"){document.getElementById('navigation').setAttribute("class","noshow");}  
  else{window.alert("stupid");}
  }
