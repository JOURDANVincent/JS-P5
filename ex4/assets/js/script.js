let wall = document.getElementById('wall');
let lastSrc = wall.src;

function imgChange() {
    if (wall.getAttribute('src') == 'assets/img/nwall.jpg') {
        wall.setAttribute('src', 'assets/img/wall2.jpg');
    } else {
        wall.setAttribute('src', 'assets/img/nwall.jpg');
    }
}

function imgUp () {
    wall.style.height = '180px';
    wall.style.width = '320px';
}

function imgDown () {
    wall.style.height = '90px';
    wall.style.width = '160px';
}




// function imgChange() {
    
//     if (wall.src == lastSrc) {
//         wall.src = 'assets/img/wall2.jpg';
//     } else {
//         wall.src = 'assets/img/nwall.jpg';
//     }
// }