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

    localStorage.setItem("score", score);

    window.location.href = "result.html";
}