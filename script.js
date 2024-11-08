const questions = [
    {
        question: "In what year was Devrim Arabaları first produced?",
        answers: [
            { text: "1961", correct: true },
            { text: "1971", correct: false },
            { text: "1981", correct: false },
            { text: "1991", correct: false }
        ]
    },
    {
        question: "How many prototype Devrim cars were produced?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]
    },
    // Add more questions as desired
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        alert("Correct!");
    } else {
        alert("Wrong! Try again.");
    }
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        alert("Game Over! You finished the quiz.");
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    }
    nextButton.classList.add('hide');
});

startGame();
