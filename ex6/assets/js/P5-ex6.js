let iPink = document.getElementById("pinkname");
iPink.addEventListener('click', pinkFocus);

let iBlue = document.getElementById("bluename");
iBlue.addEventListener('click', blueFocus);


function pinkFocus() {
  iPink.style.outlineColor = "red";
  iBlue.style.border = "none";
  iPink.focus();
  iBlue.blur();
}  


function blueFocus() {
  iBlue.style.outlineColor = "blue";
  iPink.style.border = "none";
  iBlue.focus();
  iPink.blur();
}  
