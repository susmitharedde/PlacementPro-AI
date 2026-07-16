function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}
function loginUser(){
    window.location.href = "result.html";
}

function submitQuiz() {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "a") {
        score++;
    }

    if (q2 && q2.value === "b") {
        score++;
    }

    if (q3 && q3.value === "a") {
        score++;
    }

    // Save score
    localStorage.setItem("score", score);

    // Update completed quiz count
    let completed = Number(localStorage.getItem("completedQuiz")) || 0;
    completed++;
    localStorage.setItem("completedQuiz", completed);

    // Go to result page
    window.location.href = "result.html";
}

function loadDashboard() {

    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("username").innerHTML = user.name;
    }

    let completed = localStorage.getItem("completedQuiz") || 0;

    document.getElementById("progress").innerHTML = completed + " / 10";
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

window.onload = function () {

    let score = localStorage.getItem("score");

    if (score == null) {
        score = 0;
    }

    let progress = document.getElementById("progress");
    if (progress) {
        progress.innerHTML = score + " / 3";
    }

}