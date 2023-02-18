const data = [
    {
        id: 1,
        question: "Which is the actual party hiding amongst these",
        answers: [
            { answer: "PDP", isCorrect: true },
            { answer: "Buhari", isCorrect: false },
            { answer: "LPP", isCorrect: false },
            { answer: "Bula Ba", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "What is the population of Nigeria",
        answers: [
            { answer: "200 million today", isCorrect: false },
            { answer: "300 million during election ", isCorrect: false },
            { answer: "No recent census data", isCorrect: true },
            { answer: "200 million, no bargaining", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "Who/how is going to win 2023 Presidential election",
        answers: [
            { answer: "Peter Obi", isCorrect: false },
            { answer: "Bola Tinubu", isCorrect: false },
            { answer: "Atiku Abubakkar", isCorrect: false },
            { answer: "Your vote will count, we have suffered", isCorrect: true },
        ],
    },
    {
        id: 4,
        question: "Did Scar die in shanty town?",
        answers: [
            { answer: "No body, no evidence", isCorrect: true },
            { answer: "He made the movie interesting, he must live", isCorrect: false },
            { answer: "It was a double ganga that was stabbed", isCorrect: false },
            { answer: "His ring saved him from death", isCorrect: false },
        ],
    },
]


const gameScreen = document.querySelector(".game")
const result = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

//index the questions to get an order to replace the questions after being answered

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer; //bool

//according to the question number we're going to fetch any question 
const showQuestion = (qNumber) => {
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers
        .map((item, index) =>
            `
        <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
        </div>
        `
        ).join("");

    selectAnswer()
};


const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(element => {
        element.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else alert("Select an option!")
    });
};

showQuestion(qIndex)
submitAnswer()