document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 20;
    const timerDisplay = document.getElementById("timer");
    const quizForm = document.getElementById("quiz-form");

    const scoreDisplay = document.createElement("h2");
    scoreDisplay.id = "score";
    scoreDisplay.style.marginTop = "20px";
    scoreDisplay.style.color = "#131322"; 
    quizForm.appendChild(scoreDisplay); 

    const correctAnswers = {
        q1: "c", q2: "b", q3: "c", q4: "a", q5: "b",
        q6: "c", q7: "c", q8: "b", q9: "a", q10: "c"
    };

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds; 

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            checkAnswers(); 
        } else {
            timeLeft--;
        }
    }

    const countdown = setInterval(updateTimer, 1000); 

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();
        checkAnswers();
    });

    function checkAnswers() {
        let score = 0;
        const formData = new FormData(quizForm);

        for (const [question, answer] of Object.entries(correctAnswers)) {
            if (formData.get(question) === answer) {
                score++;
            }
        }

        clearInterval(countdown);
        scoreDisplay.textContent = `Your Score: ${score}/10`;
    }
});
