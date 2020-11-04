let bPink = document.getElementById("pink");
let iPink = document.getElementById("pinkname")
bPink.addEventListener('click', pinkFocus);

let bBlue = document.getElementById("blue");
let iBlue = document.getElementById("bluename")
bBlue.addEventListener('click', blueFocus);


function pinkFocus() {
  iPink.style.backgroundColor = "pink";
  iBlue.style.backgroundColor = "none";
  document.getElementById("pinkname").focus();
  document.getElementById("bluename").blur();
}  


function blueFocus() {
  iBlue.style.backgroundColor = "blue";
  document.getElementById("bluename").focus();
  document.getElementById("pinkname").blur();
}  
