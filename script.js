const quizQuestion = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-button");
const displayQuestion = document.querySelector("#next-button");
const timer = document.querySelector("#time");
const questionAndAnswers = [{ q: "q1", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q2", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q3", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q4", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q5", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q6", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q7", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q8", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q9", choices: ["a1", "a2", "a3"], answer: 0 }, { q: "q10", choices: ["a1", "a2", "a3"], answer: 0 }];
let indexOfQuestions = 0;

 
startQuiz.addEventListener('click', function (event) {
    $('#quiz').html('');
    nextQuestion();
    //The below code hides the 'Start Quiz' button
    let x = document.getElementById("start-button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

displayQuestion.addEventListener('click', function (event) {
    $('#quiz').html('');
    nextQuestion();
})

function nextQuestion() {
    // questionAndAnswers[0].choices.indexOf('a1') === questionAndAnswers[0].answer
    if (indexOfQuestions < questionAndAnswers.length) {
        var question = document.createElement("h3");
        question.textContent = questionAndAnswers[indexOfQuestions].q;
        if (indexOfQuestions > 0) {
            //document.getElementById("quiz").removeChild(document.getElementsByTagName("h3"));
        }
        document.getElementById("quiz").appendChild(question);
        indexOfQuestions++;
    };
}



//questionsArray.forEach(questionLoop);
//document.getElementById("quiz").innerHTML = questionAndAnswers[indexOfQuestions].q;

//document.getElementById("quiz").replaceChild(question);
// if (indexOfQuestions < questionAndAnswers.length - 1) {
//   indexOfQuestions++;
//}
let timeCounter = 60;
function timeFunction() {
    setInterval(timeCounter - 1, 1000);
}



/*function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 0) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};*/