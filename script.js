function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Name: " + name + "<br>Email: " + email;
}
