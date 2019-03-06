function on() {
  document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.getElementById("add-bttn").style.margin = "26rem 2.5rem 0 12.5rem";
  document.getElementById("drink-bttn").style.margin = "29.5rem 2.5rem 0 10rem";
  document.getElementById("drink-bttn").style.backgroundColor = "rgb(255, 91, 91)";
  document.getElementById("beer-bttn").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}

function testadd() {
  document.getElementById("testadd").style.display = "block";
}

function testaddoff() {
  document.getElementById("testadd").style.display = "none";
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}

function testdrink() {
  document.getElementById("testdrink").style.display = "block";
}

function testdrinkoff() {
  document.getElementById("testdrink").style.display = "none";
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("add-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.margin = "30rem 2.5rem 0 14.5rem";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}
