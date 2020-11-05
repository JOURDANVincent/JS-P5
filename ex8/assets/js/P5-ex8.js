function clone() {
    cloneFirstName = document.getElementById("firstName").cloneNode(true);
    cloneAge = document.getElementById("age").cloneNode(true);

    cloneFirstName.id = "firstName2"
    document.getElementById("form").appendChild (cloneFirstName);
    cloneFirstName.id = "age2"
    document.getElementById("form").appendChild (cloneAge);
}





