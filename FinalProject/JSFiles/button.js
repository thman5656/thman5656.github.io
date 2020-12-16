function toggleMenu()
  { 

  let curmenu = document.getElementById('navUL').classList;
  if (curmenu == "noshow"){document.getElementById('navUL').setAttribute("class","shownav");}
  else if (curmenu == "shownav"){document.getElementById('navUL').setAttribute("class","noshow");}  
  else{window.alert("stupid"); }
  }
