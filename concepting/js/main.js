function closeButtons() {
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}

// Opening the drink buttons when pressing the beer button
function on() {
  overlayToggle();
  document.getElementById("add-bttn").style.margin = "26rem 2.5rem 0 12.5rem";
  document.getElementById("drink-bttn").style.margin = "29.5rem 2.5rem 0 10rem";
  document.getElementById("drink-bttn").style.backgroundColor = "rgb(255, 91, 91)";
  document.getElementById("beer-bttn").style.display = "none";
  document.getElementById("profile").style.color = "rgba(0, 0, 0, 0.5)";
}

// Closing the drink buttons when pressing the cross
function off() {
  closeButtons();
  overlayToggle();
  document.getElementById("profile").style.color = "#31b16c";
  //Closing profileAside
  document.getElementById("profileAside").setAttribute("style", "transform: translateX(calc(360px - 2.5rem));");
}

//Opening profile profileAsideOpen
function profileAsideOpen() {
  overlayToggle();
  document.getElementById("profileAside").setAttribute("style", "transform: translateX(calc(360px - 17rem));");
}

// Opening the add page
function testadd() {
  document.getElementById("testadd").style.display = "block";
}

// Closing the add page + button update
function testaddoff() {
  closeButtons();
  overlayToggle();
  document.getElementById("testadd").style.display = "none";
  document.getElementById("profile").style.color = "#31b16c";
}

// Opening the drink page
function testdrink() {
  document.getElementById("testdrink").style.display = "block";
}

// Closing the drink page + button update
function testdrinkoff() {
  closeButtons();
  overlayToggle();
  document.getElementById("testdrink").style.display = "none";
  document.getElementById("profile").style.color = "#31b16c";
}


// Increasing add value
function increaseAddValue() {
  var score = parseInt(document.getElementById('addValue').innerHTML);
    score = score+1;
    document.getElementById('addValue').innerHTML = score;
}
// Decrease add value
function decreaseAddValue() {
  var score = parseInt(document.getElementById('addValue').innerHTML);
  //check if score is not below zero
  if (score >= 1) {
    score = score-1;
    document.getElementById('addValue').innerHTML = score;
  }
}

// Increasing drink value
function increaseDrinkValue() {
  var score = parseInt(document.getElementById('drinkValue').innerHTML);
    score = score+1;
    document.getElementById('drinkValue').innerHTML = score;
}
// Decrease drink value
function decreaseDrinkValue() {
  var score = parseInt(document.getElementById('drinkValue').innerHTML);
  //check if score is not below zero
  if (score >= 1) {
    score = score-1;
    document.getElementById('drinkValue').innerHTML = score;
  }
}

//Overlay toggle
function overlayToggle() {
  var x = document.getElementById('overlay');
  if (x.style.display === "block") {
    x.setAttribute("style", "background-color: transparent; display: none;");
  } else{
    x.setAttribute("style", "background-color: rgba(0, 0, 0, 0.5); display: block;");
  }
}

//Simple jQuery slideToggle to show anytimer details
$(document).ready(function(){
  $(".user").click(function(){
    $(".userList").slideToggle("slow, linear");
  });
});
