const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
  {
    question: "Who wrote 'Hamlet' ?",
    options: ["Charles", "Jane", "William", "Mark"],
    correct: 2,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option");
// console.log(optionsEls);
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEls.forEach((optionEl, index) => {
    document.getElementById("option" + index).textContent =
      currentQuestion.options[index];
    optionEl.checked = false;
  });
}

function checkAnswer() {
  let selectdOption = document.querySelector('input[name="option"]:checked');
  console.log(selectdOption);

  if (!selectdOption) {
    alert("Please select an option");
    return;
  }

  let answer = selectdOption.value;
  if (answer == quizData[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultEl.classList.remove("hidden");
  scoreEl.textContent = score;
  totalEl.textContent = quizData.length;
  document.getElementById("quiz").classList.add("hidden");
}

submitBtn.addEventListener("click", checkAnswer);

loadQuestion();
