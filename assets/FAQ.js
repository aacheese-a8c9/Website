document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            answer.classList.toggle("active");
            button.querySelector("ion-icon").classList.toggle("rotate");
        });
    });
});
