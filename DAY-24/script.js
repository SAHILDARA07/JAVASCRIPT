const questionslist = [
  {
    "question": "What is the primary gas found in Earth's atmosphere?",
    "options": {
      "a": "Oxygen",
      "b": "Carbon Dioxide",
      "c": "Nitrogen",
      "d": "Argon"
    },
    "answer": "c"
  },
  {
    "question": "Which organ in the human body is responsible for pumping blood?",
    "options": {
      "a": "Lungs",
      "b": "Brain",
      "c": "Liver",
      "d": "Heart"
    },
    "answer": "d"
  },
  {
    "question": "What is the boiling point of water at sea level?",
    "options": {
      "a": "90°C",
      "b": "100°C",
      "c": "120°C",
      "d": "80°C"
    },
    "answer": "b"
  },
  {
    "question": "Which of these is a prime number?",
    "options": {
      "a": "4",
      "b": "9",
      "c": "11",
      "d": "15"
    },
    "answer": "c"
  },
  {
    "question": "Who is credited with the discovery of penicillin?",
    "options": {
      "a": "Marie Curie",
      "b": "Alexander Fleming",
      "c": "Isaac Newton",
      "d": "Albert Einstein"
    },
    "answer": "b"
  },
  {
    "question": "What is the largest ocean on Earth?",
    "options": {
      "a": "Atlantic Ocean",
      "b": "Indian Ocean",
      "c": "Arctic Ocean",
      "d": "Pacific Ocean"
    },
    "answer": "d"
  },
  {
    "question": "Which country is home to the Great Barrier Reef?",
    "options": {
      "a": "Brazil",
      "b": "Australia",
      "c": "Thailand",
      "d": "Mexico"
    },
    "answer": "b"
  },
  {
    "question": "What is the square root of 144?",
    "options": {
      "a": "10",
      "b": "11",
      "c": "12",
      "d": "14"
    },
    "answer": "c"
  },
  {
    "question": "Which vitamin is primarily obtained from sunlight?",
    "options": {
      "a": "Vitamin A",
      "b": "Vitamin B12",
      "c": "Vitamin C",
      "d": "Vitamin D"
    },
    "answer": "d"
  },
  {
    "question": "What is the smallest unit of matter?",
    "options": {
      "a": "Molecule",
      "b": "Atom",
      "c": "Cell",
      "d": "Electron"
    },
    "answer": "b"
  }
]

const timer = document.getElementById("timer")
const questionindex = document.getElementById("question-index")
const question = document.getElementById("question")
const optionA = document.getElementById("option-a")
const optionB = document.getElementById("option-b")
const optionC = document.getElementById("option-c")
const optionD = document.getElementById("option-d")

const next_button = document.getElementById("next-button")

let currentindex = 0;

function displayQuestion() {

questionindex.textContent = "Q" + (currentindex + 1);
question.textContent = questionslist[currentindex].question;

optionA.textContent = questionslist[currentindex].options.a;
optionB.textContent = questionslist[currentindex].options.b;
optionC.textContent = questionslist[currentindex].options.c;
optionD.textContent = questionslist[currentindex].options.d;
}

next_button.addEventListener("click", () => {
  if (currentindex < questionslist.length) {
    currentindex++;
    displayQuestion();
  } else{
    alert("ALL Question attempted");
  }
})  

displayQuestion();