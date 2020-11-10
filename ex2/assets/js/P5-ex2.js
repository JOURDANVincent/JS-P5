function validate() {

    // récupération des éléments
    let mdp = document.getElementById("mdp");
    let mdpc = document.getElementById("mdpc")

    if (mdp.value === mdpc.value) {
        mdp.classList.add('greenBorder').remove('redBorder');
        mdpc.classList.add('greenBorder').remove('redBorder');
    }
    else {
        mdp.classList.add('redBorder').remove('greenBorder');
        mdpc.classList.add('redBorder').remove('greenBorder');
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