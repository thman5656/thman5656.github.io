//need to use JS to make the menu items show the active page 
//need to use JS to show date in the footer 

window.onload = function(){lastModDate()}
function lastModDate()
{
  let curdate = new Date();
  document.getElementById('lastModDate').innerHTML = curdate;
}