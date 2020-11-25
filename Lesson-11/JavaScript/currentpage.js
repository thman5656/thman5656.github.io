let ActivePage = document.URL;
let ActiveHREF = ActivePage.substr(ActivePage.lastIndexOf("/"));

document.getElementById(ActiveHREF).style.backgroundColor = "#2c3531";