const quizQuestion = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-button");
const displayQuestion = document.querySelector("#next-button");
const answerLis = document.querySelector("#answers");
const nextDiv = document.querySelector("#hide");
const timer = document.querySelector("#time");
const initialInput = document.querySelector("#initials");
const submitInitials = document.querySelector("#submitter");
const myScores = document.querySelector("#scoreList");
const headerText = document.querySelector("#message");
const myResult = document.querySelector("#results");
let secondsLeft = 3;
let indexOfQuestions = 0;
let score = 0;
let valueArr = [];

startQuiz.addEventListener('click', function (event) {
    setTime();
    displayFunction();
    nextQuestion();
    x = document.getElementById("start-button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});
function displayFunction() {
    document.getElementById("hide").style.display = "flex";
}
displayQuestion.addEventListener('click', function () {
    $('#quiz').html('');
    $('#answers').html('');
    nextQuestion();
})
function nextQuestion() {
    if (indexOfQuestions === questionAndAnswers.length || secondsLeft < 0) {
        endQuiz();
        return;
    }
    let currentQuestion = questionAndAnswers[indexOfQuestions];
    let answer = questionAndAnswers[indexOfQuestions].answerKey;
    let question = document.createElement('h3');
    question.textContent = questionAndAnswers[indexOfQuestions].q;
    let qEL = document.getElementById("quiz").appendChild(question);
    currentQuestion.choices.forEach(function (choice, i) {
        let choiceNode = document.createElement('button');
        choiceNode.setAttribute("class", "btnChoice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = choice;
        answerLis.appendChild(choiceNode);
        choiceNode.addEventListener('click', function (event) {
            console.log("For Each Answer: " + currentQuestion.answerKey);
            console.log(currentQuestion.choices.indexOf(choice));
            if (answer === currentQuestion.choices.indexOf(choice)) {
                console.log("answer key: " + answer);
                console.log("choice: " + currentQuestion.choices.indexOf(choice));
                score++
            } 
            if (answer !== currentQuestion.choices.indexOf(choice)) {
                secondsLeft -= 5;
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
    document.getElementById("scoreList").style.display = "block"; 
}
function saveHighScores(e) {
    e.preventDefault();
    document.getElementById("initials").submit();
    let value = initialInput.value;
    //valueArr.push(value + ` ${score}`);
    let scoreObject = {
        Initials: value,
        Score: score
    }
    valueArr.push(scoreObject);
    localStorage.setItem("initials", valueArr);
    getHighScores();
}
function getHighScores() {
    localStorage.getItem("initials");
    //loop through array of objects, and make separate list items for each
    for (var i = 0; i < valueArr.length; i++){
        myScores.append(valueArr);
    }
}

