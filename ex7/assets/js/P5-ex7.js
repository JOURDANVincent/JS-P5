let para = document.getElementById("para");
para.addEventListener('scroll', zoom);

function zoom () {
    let scroll_top = window.scrollY;
    let last_scroll_top = 0;
    let fsz = new String;

    // calcul du dezoom
    if(scroll_top < last_scroll_top) {
        if (scroll_top < 16){
            //valeur font-size minimum pour ne pas échapper possibilité de scroll
            fsz = "16px";
        } else{
            // variable valeur du font-size en px
            fsz = String (scroll_top + "px");
        }  
    }
    // calcul du zoom
    else if (scroll_top > last_scroll_top){
        // variable valeur du font-size en px
        fsz = String (scroll_top + "px");  
    }
    // Ajustement du font en fct scroll up/down
    para.style.fontSize = fsz;
    last_scroll_top = scroll_top;

}