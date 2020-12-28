

function openNav() {
  document.getElementById("mySidenav").style.width = "16%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var x = window.matchMedia("(max-width: 1035px)")

function newNav(x) {
if (x.matches) {
  document.getElementById("mySidenav").style.width = "100%";
} else {
  null
}
};




var date = new Date();
var year = date.getFullYear();

console.log(year);

document.getElementById("Copyright").innerHTML = "Copyright ©" + " " + [year];






function clicked() {
  var numOfNav = document.querySelectorAll("#clicked").length;
  for (i = 0; i<numOfNav; i++) {
  document.querySelectorAll("#clicked")[i].addEventListener("click", function() {
    var id = this.className;
    x = document.querySelectorAll(".jordan1s");
    for (i = 0; i < x.length; i++) {
    x[i].style.visibility = "hidden";
    x[i].style.position = "absolute";
  };
 document.getElementsByClassName(id)[1].style.visibility = "visible";
 document.getElementsByClassName(id)[1].style.paddingTop = "10%";
 document.getElementsByClassName(id)[1].style.position = "absolute";
 document.getElementsByClassName(id)[1].style.top = ".01vw";
 document.getElementsByClassName(id)[1].style.right = "10%";
 document.getElementsByClassName(id)[1].style.position = "relative";
 document.getElementById("Jordans").style.padding = "0% 0% 150% 0%";
 document.getElementsByClassName("down")[0].style.top = "80%";
 document.getElementsByClassName("down")[1].style.top = "80%";
 document.getElementsByClassName("down")[2].style.top = "80%"

 });
 };

 };

 clicked()
