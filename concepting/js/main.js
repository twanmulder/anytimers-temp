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

  //Closing profileAside
  document.getElementById("profileAside").setAttribute("style", "transform: translateX(calc(360px - 2.5rem));");
}

//Opening profile profileAsideOpen
function profileAsideOpen() {
  document.getElementById("profileAside").setAttribute("style", "transform: translateX(calc(360px - 17rem));");
  document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
