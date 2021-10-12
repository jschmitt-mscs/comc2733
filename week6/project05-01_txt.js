"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Joseph Schmitt
      Date:   11.09.2021

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

let timeID;
let questionList = document.querySelectorAll("div#quiz input");
let isTimerStarted = false;

startQuiz.addEventListener("click", function(){
   //prevent from clicking button multiple times
   if(!isTimerStarted){
      overlay.className = "showquiz"; 
      countdown();
      timeID = window.setInterval(countdown, 1000);
      isTimerStarted = true;     
   }
});

function countdown(){

   if(timeLeft == 0){
      window.clearInterval(timeID);
      let totalCorrect = checkAnswers();
      if(totalCorrect == correctAnswers.length){
         alert("Congratulations, you've scored 100%!")
      } else {
         alert("You answered " + (correctAnswers.length - totalCorrect) + " question(s) incorrectly.");
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz"; 
         isTimerStarted = false;
      }
   } else {
      timeLeft = timeLeft - 1;
      quizClock.value = timeLeft;
   }

}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

