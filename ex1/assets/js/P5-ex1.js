function validate() {
        
    let mdp = document.getElementById("mdp");
    let mdpc = document.getElementById("mdpc")

    if (mdp.value === mdpc.value) {
        mdp.style.borderColor="green";
        mdpc.style.borderColor="green";  
    }
    else {
        mdp.style.borderColor="red";
        mdpc.style.borderColor="red";
    }
}