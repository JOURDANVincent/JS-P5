let iName = document.getElementById("name");
let mName = document.getElementById("missName");
let regName = /^[A-Za-z\-]+$/;

let iMail = document.getElementById("mail");
let mMail = document.getElementById("missMail");
let regMail =/^([A-Za-z0-9]+)@([A-Za-z0-9\-]+)\.{1}([a-z]{2,5})$/;

let iAge = document.getElementById("age");
let mAge = document.getElementById("missAge");
let regAge = /^[0-9]{1,4}$/;

// Test input Name !! //
iName.onkeyup = function () {
    let resName = iName.value.match(regName);
    if (iName.validity.valueMissing) {
        mName.textContent = "Champ obligatoire !!";
        iName.style.outlineColor = iName.style.backgroundColor = "red";
    } else if (resName == null) {
        mName.textContent = "Ne doit contenir que des lettres !!";
        iName.style.outlineColor = iName.style.backgroundColor = "red";
    } else {
        mName.textContent = "BRAVO !!!";
        iName.style.outlineColor = iName.style.backgroundColor = "green";
    }
}

// Test input Mail !! //
iMail.onkeyup = function () {
    let resMail = iMail.value.match(regMail);
    console.log(resMail);
    if (iMail.validity.valueMissing) {
        mMail.textContent = "Champ obligatoire !!";
        iMail.style.outlineColor = iMail.style.backgroundColor = "red";
    } else if (resMail == null) {
        mMail.textContent = "Doit être sous forme abc@def.gh !!";
        iMail.style.outlineColor = iMail.style.backgroundColor = "red";
    } else {
        mMail.textContent = "BRAVO !!!";
        iMail.style.outlineColor = iMail.style.backgroundColor = "green";
    }
}

// Test input Age !! //
iAge.onkeyup = function () {
    let resAge = iAge.value.match(regAge);
    console.log(resAge);
    if (iAge.validity.valueMissing) {
        mAge.textContent = "Champ obligatoire !!";
        iAge.style.outlineColor = iAge.style.backgroundColor = "red";
    } else if (iAge.value.length >3) {
        mAge.textContent = "Ne doit contenir que 3 caratères !!";
        iAge.style.outlineColor = iAge.style.backgroundColor = "orange";
    } else if (iAge.value <= 0 | iAge.value >= 130) {
        mAge.textContent = "Ton age doit être compris entre 1 et 130 !!";
        iAge.style.outlineColor = iAge.style.backgroundColor = "yellow";
    } else if (resAge == null) {
        mAge.textContent = "Ne doit contenir que des chiffes !!";
        iAge.style.outlineColor = iAge.style.outlineColor = iAge.style.backgroundColor = "red";
    } else {
        mAge.textContent = "BRAVO !!!";
        iAge.style.outlineColor = iAge.style.outlineColor = iAge.style.backgroundColor = "green";
    }
}