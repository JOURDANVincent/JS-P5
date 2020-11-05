let iName = document.getElementById("name");
let missName = document.getElementById("missName");
let vName = new RegExp("[a-z]+");

let iMail = document.getElementById("mail");
let missMail = document.getElementById("missMail");
let vMail = new RegExp("[a-z]+@[a-z]+\.{1}fr");

let iAge = document.getElementById("age");
let missAge = document.getElementById("missAge");
let vAge = new RegExp("[0-9]{,3}");

iName.addEventListener('input', checkName);
iMail.addEventListener('input', checkMail);
iAge.addEventListener('input', checkAge);

function checkName(){
    if (iName.validity.valueMissing) {
        missName.textContent = 'Champ obligatoire';
        missName.style.backgroundColor = "red";
    } else if (vName.test(iName.value) == false) {
        missName.textContent = 'Ce champ ne doit contenir que des lettres ...!';
        missName.style.backgroundColor = "red";
    } else if (iName.value.length < 3){
        missName.textContent = 'Ce champ doit contenir 3 caractères minimum ...!';
        missName.style.backgroundColor = "orange";
    } else {
        missName.textContent = 'Correct';
        missName.style.backgroundColor = "green";
    }
}

function checkMail(){
    if (iMail.validity.valueMissing) {
        missMail.textContent = 'Champ obligatoire';
        missMail.style.backgroundColor = "red";
    } else if (vMail.test(iMail.value) == false) {
        missMail.textContent = 'Ce champ ne doit contenir : abc@cde.fr'
        missMail.style.backgroundColor = "red";
    }
    else {
        missMail.textContent = 'Correct';
        missMail.style.backgroundColor = "green";
    }
}

function checkAge(){
    if (iAge.validity.valueMissing) {
        missAge.textContent = 'Champ obligatoire';
        missAge.style.backgroundColor = "red";
    }
    else if (vAge.test(iAge.value) == false) {
        if (iAge.value.length > 3) {
            missAge.textContent = '3 caractères maximumu autorisé !!!'
            missAge.style.backgroundColor = "orange";
        } else if (iAge.value > 0){
            missAge.textContent = ''
            missAge.style.backgroundColor = "none";
        } else {
            missAge.textContent = 'Ce champ ne doit contenir que des chiffres'
            missAge.style.backgroundColor = "red";
        }
    } else if(iAge.value <= 0 | iAge.value >= 130){
        missAge.textContent = "Ton age doit être compris entre 0 et 130";
        missAge.style.backgroundColor = "yellow";
    }
    else {
        missAge.style.backgroundColor = "green";
        missAge.textContent = 'Correct';
    }
    
}

