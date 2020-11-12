let i = 0;

function cloneDiv() {
    i++;
    cloneFirstName = document.getElementById("firstName").cloneNode(true);
    cloneAge = document.getElementById("age").cloneNode(true);
    cloneFirstName.id += i;
    document.getElementById('form').appendChild (cloneFirstName);
    cloneAge.id += i;
    document.getElementById('form').appendChild (cloneAge);

}





