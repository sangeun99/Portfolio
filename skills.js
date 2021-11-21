$(document).ready(function(){
  var skillList = document.querySelectorAll(".skill-percentage-bar");
  for (var value of skillList) {
    var skillPercentage = value.textContent;
    value.style.width = skillPercentage;
  }
});