var previous = window.scrollY;
var elementTarget = document.getElementById("home-section");
window.onscroll = function() {
  var current = window.scrollY;
  if(window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)){
    document.getElementById("navi-bar").style.top = "0";
  } else if (previous > current) {
    document.getElementById("navi-bar").style.top = "0";
  } else if (current>previous){
    document.getElementById("navi-bar").style.top = "-20vh";
  }
  
  previous = current;
  
}