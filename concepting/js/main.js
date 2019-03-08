// Opening the drink buttons
function on() {
  document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.getElementById("add-bttn").style.margin = "26rem 2.5rem 0 12.5rem";
  document.getElementById("drink-bttn").style.margin = "29.5rem 2.5rem 0 10rem";
  document.getElementById("drink-bttn").style.backgroundColor = "rgb(255, 91, 91)";
  document.getElementById("beer-bttn").style.display = "none";
}

// Closing the drink buttons
function off() {
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";

  //Close profileDropdown
  document.getElementById("profile").setAttribute("style", "color: #31b16c; background-color: transparent; border-radius: 0;");
  document.getElementById("profileDropdown").setAttribute("style", "opacity: 0; visibility: hidden; transform: translateY(-2%);");
}

//Open profile dropdown
function profileon() {
  document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.getElementById("profile").setAttribute("style", "color: rgb(255, 255, 255); background-color: white; border-radius: 4px 4px 0 0;");
  document.getElementById("profileDropdown").setAttribute("style", "opacity: 1; visibility: visible; transform: translateY(0%);");
}

//Close profile dropdown
function profileoff() {
  document.getElementById("overlay").style.backgroundColor = "transparent";
}

// Opening the add page
function testadd() {
  document.getElementById("testadd").style.display = "block";
}

// Closing the add page + button update
function testaddoff() {
  document.getElementById("testadd").style.display = "none";
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}

// Opening the drink page
function testdrink() {
  document.getElementById("testdrink").style.display = "block";
}

// Closing the drink page + button update
function testdrinkoff() {
  document.getElementById("testdrink").style.display = "none";
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
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
