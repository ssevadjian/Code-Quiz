const quizQuestion = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-button");
const displayQuestion = document.querySelector("#next-button");
const answerLis = document.querySelector("#answers");
const nextDiv = document.querySelector("#hide");
const timer = document.querySelector("#time");
const initialInput = document.querySelector("#initials");
const headerText = document.querySelector("#message");
let secondsLeft = 5;
let indexOfQuestions = 0;
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
    myFunction();
    nextQuestion();
    let x = document.getElementById("start-button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

function myFunction() {
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide").style.display = "flex";
  }

displayQuestion.addEventListener('click', function (event) {
    $('#quiz').html('');
    $('#answers').html('');
    nextQuestion();
})

function selectAnswer() {
    if (questionAndAnswers[indexOfQuestions
    ].choices[indexOfQuestions] === questionAndAnswers[indexOfQuestions].answer) {
        score++;
        console.log(score);
    }
}

function nextQuestion() {
    let currentQuestion = questionAndAnswers[indexOfQuestions];
    var question = document.createElement('h3')
    question.classList.add("mystyle");
    question.textContent = questionAndAnswers[indexOfQuestions].q;
    let qEL = document.getElementById("quiz").appendChild(question);
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute("class", "btnChoice");
        choiceNode.setAttribute("value", choice)
        choiceNode.textContent = choice;
        answerLis.appendChild(choiceNode);
        //choiceNode.onclick = selectAnswer();
    });
    indexOfQuestions++;
}

function setTime() {
    var timerInterval = setInterval(function () {
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

}