document.getElementById("header-container").style = "background-color: green";

document.getElementsByClassName("emergency-tasks")[0].style = "background-color: pink";

let section1 = document.querySelectorAll(".emergency-tasks h3").length;
for (index = 0; index < section1; index += 1) {
    document.querySelectorAll(".emergency-tasks h3")[index].style = "background-color: purple";
}
    
document.getElementsByClassName("no-emergency-tasks")[0].style = "background-color: yellow"
    
let section2 = document.querySelectorAll(".no-emergency-tasks h3").length;
for (index = 0; index < section2; index += 1) {
    document.querySelectorAll(".no-emergency-tasks h3")[index].style = "background-color: black";
}

document.getElementById("footer-container").style = "background-color: blue"