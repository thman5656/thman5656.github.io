let Currentpage = document.URL;
let Activepage = Currentpage.substr(Currentpage.lastIndexOf("/"));

document.getElementById(Activepage).style.backgroundColor = "#03045e";