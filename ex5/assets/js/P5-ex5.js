let lPara = document.getElementById("para");

let bPink = document.getElementById("pink");
bPink.addEventListener('click', ctPink);

let bBlue = document.getElementById("blue");
bBlue.addEventListener('click', ctBlue);

let bViolet = document.getElementById("violet");
bViolet.addEventListener('click', ctViolet);

let bBold = document.getElementById("bold");
bBold.addEventListener('click', ctBold);

let bItal = document.getElementById("ital");
bItal.addEventListener('click', ctItal);

function ctPink() {
  lPara.style.backgroundColor = "pink";
}  

function ctBlue() {
  lPara.style.backgroundColor = "blue";
}  

function ctViolet() {
  lPara.style.backgroundColor = "violet";
}  

function ctBold() {
  lPara.style.fontWeight = "bold";
}  

function ctItal() {
  lPara.style.fontStyle = "italic";
}  
