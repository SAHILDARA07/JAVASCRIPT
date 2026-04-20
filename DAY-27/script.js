const questionslist = [
    { question: "Primary gas in Earth's atmosphere?", options: { a: "Oxygen", b: "CO2", c: "Nitrogen", d: "Argon" }, answer: "c" },
    { question: "Organ responsible for pumping blood?", options: { a: "Lungs", b: "Brain", c: "Liver", d: "Heart" }, answer: "d" },
    { question: "Boiling point of water at sea level?", options: { a: "90°C", b: "100°C", c: "120°C", d: "80°C" }, answer: "b" },
    { question: "Which of these is a prime number?", options: { a: "4", b: "9", c: "11", d: "15" }, answer: "c" },
    { question: "What is the smallest unit of matter?", options: { a: "Molecule", b: "Atom", b: "Cell", d: "Electron" }, answer: "b" }
];

let currentIndex = 0;
let timeCounter = 10;
let timerId;
let userAnswers = [];
let score = 0;

// Elements
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const nextBtn = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer-circle");

function loadQuestion() {
    if (currentIndex >= questionslist.length) return showResults();

    // Reset UI
    clearInterval(timerId);
    timeCounter = 10;
    timerEl.textContent = timeCounter;
    nextBtn.classList.add("disabled");
    
    // Update Progress
    const progress = ((currentIndex) / questionslist.length) * 100;
    progressBar.style.width = `${progress}%`;
    document.getElementById("question-index").textContent = `Question ${currentIndex + 1}/${questionslist.length}`;

    // Load Data
    const q = questionslist[currentIndex];
    questionText.textContent = q.question;
    
    const options = ['a', 'b', 'c', 'd'];
    options.forEach(key => {
        const el = document.getElementById(`opt-${key}`);
        el.textContent = q.options[key];
        el.classList.remove("selected");
    });

    startTimer();
}

function startTimer() {
    timerId = setInterval(() => {
        timeCounter--;
        timerEl.textContent = timeCounter;
        if (timeCounter <= 0) {
            handleNext(); // Auto-skip on timeout
        }
    }, 1000);
}

// Option selection
document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        nextBtn.classList.remove("disabled");
        userAnswers[currentIndex] = btn.getAttribute("data-ans");
    });
});

function handleNext() {
    if (userAnswers[currentIndex] === questionslist[currentIndex].answer) {
        score++;
    }
    
    currentIndex++;
    if (currentIndex < questionslist.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerId);
    quizContainer.classList.add("d-none");
    resultContainer.classList.remove("d-none");
    
    document.getElementById("final-score").textContent = `${score} / ${questionslist.length}`;
    
    // Generate review
    let reviewHTML = '<ul class="list-group shadow-sm">';
    questionslist.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        reviewHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <small class="text-muted">Q${i+1}</small>
                    <p class="mb-0">${q.question}</p>
                </div>
                <span class="badge ${isCorrect ? 'bg-success' : 'bg-danger'} rounded-pill">
                    ${isCorrect ? 'Correct' : 'Wrong'}
                </span>
            </li>`;
    });
    reviewHTML += '</ul>';
    document.getElementById("review-area").innerHTML = reviewHTML;
}

nextBtn.addEventListener("click", handleNext);

// Launch
loadQuestion();