let iPink = document.getElementById("pinkname");
iPink.addEventListener('click', pinkFocus);

let iBlue = document.getElementById("bluename");
iBlue.addEventListener('click', blueFocus);


function pinkFocus() {
  iPink.style.outlineColor = "red";
  iBlue.style.outlineColor = "none";
  iPink.focus();
  iBlue.blur();
}  


function blueFocus() {
  iBlue.style.outlineColor = "blue";
  iPink.style.outlineColor = "none";
  iBlue.focus();
  iPink.blur();
}  
