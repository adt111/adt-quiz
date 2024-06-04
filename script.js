const questions = [
    "What is Aditi's favorite movie genre?",
    "What is Aditi's biggest fear?",
    "What is Aditi's go-to comfort food?",
    "What is Aditi's most used product?",
    "Who is Aditi's favorite person?",
];

const answers = ['d', 'b', 'c', 'a', 'a'];

const quizContainer = document.getElementById('questions-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${question}</p>
            <div class="answer">
                <input type="radio" name="q${index}" value="a"> A) horror<br>
                <input type="radio" name="q${index}" value="b"> B) thriller<br>
                <input type="radio" name="q${index}" value="c"> C) action<br>
                <input type="radio" name="q${index}" value="d"> D) rom-coms<br>
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((_, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[index]) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = calculateScore();
    resultContainer.textContent = `You scored ${score} out of ${questions.length}.`;
});

buildQuiz();
