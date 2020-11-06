
let para = document.getElementById("para");
window.addEventListener('scroll', zoom);

function zoom () {
    let x = window.scrollY;
    let fs = x;
    para.style.fontSize = "2px";
    if(x > 50){
        para.style.fontSize = "5px";
    }  if (x>100){
        para.style.fontSize = "10px";
    } if (x>150){
        para.style.fontSize = "15px";
    } if (x>200){
        para.style.fontSize = "20px";
    } if (x>250){
        para.style.fontSize = "25px";
    } if (x>300){
        para.style.fontSize = "30px";
    } if (x>400){
        para.style.fontSize = "35px";
    } if (x>500){
        para.style.fontSize = "40px";
    }
    
}