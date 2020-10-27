  /***************************************************************************
    this is in charge of hiding and showing the navigation on small screens
    when the button is clicked it displays the nav and when you click again it 
    goes away 
****************************************************************************/
  let curmenu = document.getElementById('navigation').classList;


  if (curmenu == "noshow"){document.getElementById('navigation').setAttribute("class","shownav");}
  else if (curmenu == "shownav"){document.getElementById('navigation').setAttribute("class","noshow");}  
  else{window.alert("stupid");}
