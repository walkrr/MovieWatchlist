function query() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        showError(xhr.responseText);
    });
    xhr.open("POST", "validate.php");
    xhr.setRequestHeader("Content-Type", "application/json");

    let nameVal = document.getElementById("username").value;
    let passVal = document.getElementById("password").value;
    let data = JSON.stringify({"username": nameVal, "password": passVal});
    xhr.send(data);
}

function showError(string) {
    if (string == "ok") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("OK").innerHTML = "Username and password are valid.";
    } else {
        document.getElementById("error").innerHTML = string;
        document.getElementById("OK").innerHTML = "";
    }
}