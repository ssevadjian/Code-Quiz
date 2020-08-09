const quizQuestion = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-button");
const displayQuestion = document.querySelector("#next-button");
const answerLis = document.querySelector("#answers");
const nextDiv = document.querySelector("#hide");
const timer = document.querySelector("#time");
const initialInput = document.querySelector("#initials");
const initialTextValue = document.querySelector("#initialsText");
const headerText = document.querySelector("#message");
const myResult = document.querySelector("#results");
let secondsLeft = 60;
let indexOfQuestions = 0;
let choiceIndex = 0;
let score = 0;

//When the Start Button is clicked, it gets hidden and the timer starts counting down
//When the Start Button is hidden, a question appears
//When the question appears, four list & button elements get created containing the possible answers
//Each answer has a button / radio dial / checkbox to click
//The selected answer gets stored to localStorage or the user is immediately told how they did and a counter keeps track of # correct answers
//The user clicks 'Next Question' to move to the next question and answers ...
//The user clicks 'Finish' to end the quiz and stop the timer
//If the timer counts down to zero, the user receives an alert

startQuiz.addEventListener('click', function (event) {
    setTime();
    displayFunction();
    nextQuestion();
    startQuiz.document.getElementById("start-button");
    if (startQuiz.style.display === "none") {
        startQuiz.style.display = "block";
    } else {
        startQuiz.style.display = "none";
    }
});

function displayFunction() {
    document.getElementById("hide").style.display = "flex";
  }

displayQuestion.addEventListener('click', function (event) {
    $('#quiz').html('');
    $('#answers').html('');
    nextQuestion();
})

function nextQuestion() {
    let currentQuestion = questionAndAnswers[indexOfQuestions];
    let question = document.createElement('h3');
    if (questionAndAnswers.length === 9 || secondsLeft < 0){
        endQuiz();
        return;
    }
    question.textContent = questionAndAnswers[indexOfQuestions].q;
    let qEL = document.getElementById("quiz").appendChild(question);
    currentQuestion.choices.forEach(function (choice, i) {
        let choiceNode = document.createElement('button');
        choiceNode.setAttribute("class", "#btnChoice");
        choiceNode.setAttribute("value", choice)
        choiceNode.textContent = choice;
        answerLis.appendChild(choiceNode);
        choiceNode.addEventListener('click',function (event) {
            const answer = questionAndAnswers[0].answer;
            console.log("For Each Answer: " + questionAndAnswers[0].answer);
            if (answer === choice) {
                console.log("answer key: " + answer);
                console.log("choice: " + choice);
                score++
            } 
        });
    });
    indexOfQuestions++;
}

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    timer.textContent = " ";
    document.getElementById("hide").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("initials").style.display = "block";
    document.getElementById("message").textContent = "GAME OVER";
    document.getElementById("results").textContent = `You got ${score} out of 10 questions correct`;

}

const getInput = function (event) {
    event.preventDefault()
    let value = initialTextValue.value
    localStorage.setItem("initialsText", value)
    console.log(localStorage);
}
//initialInput.addEventListener('submit', getInput(event))