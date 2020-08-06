const quizQuestion = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-button");
const displayQuestion = document.querySelector("#next-button");
const timer = document.querySelector("#time");
const questionAndAnswers = [{ q: `1. What is the object called that lets you work with both dates and time-related data?`, choices: ["Dates", "Time-warp", "Time field", "Clock"], answer: 0 }, { q: `2. What can loops offer JavaScript code as a whole?`, choices: ["Add plug-ins", "Improved performance", "Cleaner syntax", "Cross-platform support"], answer: 1 }, { q: "3. What is the name of the statement that is used to exit or end a loop?", choices: ["Close statement", "Conditional statement", "Falter statement", "Break statement"], answer: 3 }, { q: `4. In JavaScript, what is used in conjunction with HTML to “react” to certain elements?`, choices: ["Events", "RegExp", "Condition", "Boolean"], answer: 0 }, { q: `5. In JavaScript, what element is used to store and manipulate text, usually in multiples?`, choices: ["Variable", "Recorders", "Arrays", "Strings"], answer: 3 }, { q: `6. What is the language or list of instructions that are executed by the computer (how JavaScript is built)?`, choices: ["Syntax", "JSON", "Scope", "Output"], answer: 0 }, { q: `7. What is considered to be the most popular programming language in the world?`, choices: ["Swift", "HTML", "JavaScript", "Ruby"], answer: 2 }, { q: "8. This is what you call the guide that defines coding conventions for all projects.", choices: ["Style guide", "Main textbook", "Coding dictionary", "Developer's Reference"], answer: 3 }, { q: "9. What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?", choices: ["While Loop", "Else Loop", "For Loop", "Conditional Loop"], answer: 0 }, { q: "10. Where is the JavaScript placed inside an HTML document or page?", choices: ["In the <body> and <head> sections.", "In the <meta> section.", "In the <title> section.", "In the <footer> section."], answer: 0 }];
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
    //Now clear the element so it can populate with the next question
    $('#quiz').html('');
    nextQuestion();
    //Hides the 'Start Quiz' button after clicking it
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
        var question = document.createElement('h3');
        var choice = document.createElement('li');
        choice.textContent = questionAndAnswers[0].choices;
        question.textContent = questionAndAnswers[indexOfQuestions].q;
        document.getElementById("quiz").appendChild(question).appendChild(choice);
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
    setInterval(function () { timeCounter - 1 }, 1000);
}

window.onload = function () {
    display = document.querySelector('#time');
};