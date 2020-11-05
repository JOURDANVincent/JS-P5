function validate() {

    let mdp = document.getElementById("mdp");
    let mdpc = document.getElementById("mdpc")

    if (mdp.value === mdpc.value) {
        mdp.className = mdpc.className = 'greenBorder';
    }
    else {
        mdp.className = mdpc.className = 'redBorder';
    }

}
    
