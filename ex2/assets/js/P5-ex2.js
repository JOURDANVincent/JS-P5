function validate() {

    // récupération des éléments
    let mdp = document.getElementById("mdp");
    let mdpc = document.getElementById("mdpc")

    if (mdp.value === mdpc.value) {
        mdp.classList.add('greenBorder');
        mdpc.classList.add('greenBorder');
    }
    else {
        mdp.classList.add('redBorder');
        mdpc.classList.add('redBorder');
    }

}
    
// !!! className écrase la classe existante !!! //

// function validate() {

//     // récupération des éléments
//     let mdp = document.getElementById("mdp");
//     let mdpc = document.getElementById("mdpc")

//     if (mdp.value === mdpc.value) {
//         mdp.className = mdpc.className = 'greenBorder';
//     }
//     else {
//         mdp.className = mdpc.className = 'redBorder';
//     }

// }