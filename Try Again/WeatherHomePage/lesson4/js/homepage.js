/***************************************************************************
 this program is what I am currently using to show change the color of the current 
 webpage in the navigation. 
****************************************************************************/
window.onload = function(){navigation()}

  function navigation()
  { 
   var ActivePage = document.URL;
   var ActiveHREF = ActivePage.substr(ActivePage.lastIndexOf("/"));
   document.getElementById(ActiveHREF).style.backgroundColor = "#2c3531";
  }