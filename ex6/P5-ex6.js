let bPink = document.getElementById("pink");
let iPink = document.getElementById("pinkname");
bPink.addEventListener('click', pinkFocus);

let bBlue = document.getElementById("blue");
let iBlue = document.getElementById("bluename");
bBlue.addEventListener('click', blueFocus);


function pinkFocus() {
  iPink.style.borderColor = "red";
  iBlue.style.border = "none";
  document.getElementById("pinkname").focus();
  document.getElementById("bluename").blur();
}  


function blueFocus() {
  iBlue.style.borderColor = "blue";
  iPink.style.border = "none";
  document.getElementById("bluename").focus();
  document.getElementById("pinkname").blur();
}  
