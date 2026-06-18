document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (email && password) {
        message.style.color = "green";
        message.innerHTML = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Please enter Email and Password!";
    }

});