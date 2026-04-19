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

const opt_box_a = document.getElementById("opt-box-a")
const opt_box_b = document.getElementById("opt-box-b")
const opt_box_c = document.getElementById("opt-box-c")
const opt_box_d = document.getElementById("opt-box-d")


const next_button = document.getElementById("next-button")

let currentindex = 0;
let timecounter = 10;
let intervalid;
let anslist = [];

function displayQuestion() {
    if (currentindex > questionslist.length - 1) {
        console.log("-------")
        next_button.textContent = "submit";
        clearInterval(intervalid)
    } else {
        startTimer();
        questionindex.textContent = "Q" + (currentindex + 1);
        question.textContent = questionslist[currentindex].question;

        optionA.textContent = questionslist[currentindex].options.a;
        optionB.textContent = questionslist[currentindex].options.b;
        optionC.textContent = questionslist[currentindex].options.c;
        optionD.textContent = questionslist[currentindex].options.d;




    }

}

next_button.addEventListener("click", () => {
    currentindex++;
    if (currentindex < questionslist.length) {
        displayQuestion();
        if (currentindex == questionslist.length - 1) {
            next_button.textContent = "submit";
        }
    } else {
        alert(anslist.length);
    }
})

// RECURSION = when function call itself .


function startTimer() {
    clearInterval(intervalid);
    timecounter = 10;
    intervalid = setInterval(() => {

        timer.textContent = timecounter;
        timecounter--;
        if (timecounter <= 0) {
            currentindex++;
            displayQuestion();
            startTimer();
        }
    }, 1000)

}

opt_box_a.addEventListener('click', () => { console.log("A") })
console.log(anslist)
anslist.push("A")
opt_box_b.addEventListener('click', () => { console.log("B") })
console.log(anslist)
anslist.push("B")
opt_box_c.addEventListener('click', () => { console.log("C") })
console.log(anslist)
anslist.push("C")
opt_box_d.addEventListener('click', () => { console.log("D") })
console.log(anslist)
anslist.push("D")



displayQuestion();
