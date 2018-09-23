//Let's make an object! reason is, my question will have an array of answers, so it's better to code it in an object, although is tricky.
var questions = [
    {
        question: "What's Ron's biggest fear?",
        ans: ["Flying", "Spiders", "Dementors",'Rats'],
        correct: "Spiders",
    },
    {
        question: "Which of the following spells will scare Dementors",
        ans: ["Alohomora", "Lumos", "Actio","Expecto Patronum"],
        correct: "Expecto Patronum",
    },
    {
        question: "Which is Lord Voldermort's real name?",
        ans: ["Newt Scamander", "Tom Marvolo Riddle", "Gellert Grindewald","Percival Graves"],
        correct: "Tom Marvolo Riddle",
    },
    {
        question: "What was Harry's father nickname",
        ans: ["Moony", "Wormtail", "Padfoot","Prongs"],
        correct: "Prongs",
    },
    {
        question: "What magic potion gives you luck?",
        ans: ["Felix Felicis", "Veritaserum", "Amortentia","Wolfsbane Potion"],
        correct: "Felix Felicis",
    },
    {
        question: "A wizard son that cannot use magic is known as ____?",
        ans: ["Muggle", "Squib","Mudblood","Death Eater"],
        correct: "Squib",
    },
    {
        question: "Which store sells Ice Cream in Diagon Alley?",
        ans: ["Florish and Blotts", "Leaky Claudron", "Florean Fortescue's Ice Cream Parlour","Magical Menagerie"],
        correct: "Florean Fortescue's Ice Cream Parlour",
    },
    {
        question: "When did the Battle of Hogwarts happened?",
        ans: ["1980", "1992", "1987","1998"],
        correct: "1998",
    },

 ];

 //Question have an amount of 3 seconds per questions, it will be a shame for anyone who haven't seen or read Harry Potter before this (huehuehuehue)
 var quizTimer = (questions.length)*3; 


//Moar variables to keep the score!
var correctAns = 0; 
var wrongAns = 0;
var noAns = 0; 
//Here is the string that will hold the quiz result at the end
var quizResults = "";

//Now let's make a function that will keep track of the unanswered questions
var missing = function(x){
    console.log(missing);
   return x = ((questions.length) - correctAns - wrongAns);
};

//This calculates your grade (related to quizResults var)
var score = function(y){
   y = ((correctAns / questions.length)*100);
   return y = (Math.floor(y))+"%"; //allow for just one decimal point in the result and add % sign
};

//Global event listener, starts quiz
console.log("hi, we're rdy");
$("#start-btn").on("click", function() {
   renderQuiz();
});

//Now the following will make a dynamic form with the timer
function renderQuiz() {

   //Let's get everything in the div out of the way
   $("#quiz-timer").empty();
   $("#quiz").empty();

   $("#quiz-message").text("Time left: ").append("<span id='quiz-timer'></span>"); //updates messaging

   //Now let's print the timer
   $("#quiz-timer").append(quizTimer);

   // And then we make two arrays to present every question and every answer option under it
   for (var i = 0; i < questions.length; i++) {
       
       var a = $("<label>");
       //Now with attributes
       a.addClass("question-style");
       a.attr("id", "quiz-question-" + i);
       // let's make all the html into text
       a.text(questions[i].question).append("<br>");
       // and append it to show pretty in the page-
       $("#quiz").append(a).append("<br>").after("<br>");

       // then goes the second loop for the answers
       for (var j = 0; j < questions[i].ans.length; j++) {
           //and let's show it in the page!
           $("#quiz-question-"+i).append("<input type='radio' class='ans-style' name='ans"+i+"' value='"+questions[i].ans[j]+"' id='quiz-ans-"+j+"'>"+" "+questions[i].ans[j]+"<br>"); //This has to be chained together to avoid jQuery closing the input tag by default.
       };
   };
   timeQuiz();
   return;
};

//Now let's get the countdown
var timeQuiz = function(){
   z = setInterval(function() {

       //quiztimer decreases one second at a time
       quizTimer = quizTimer-1;
       $("#quiz-timer").text(quizTimer); //and pot it on the html, it can be in the console too, but it just takes space.

       // If you run out of time, there will be an alert to stop the game
       if (quizTimer < 0) {
           clearInterval(z);
           $("#quiz-message").text("Your score: ").append("<span id='quiz-timer'></span>"); //updates messaging
           $("#quiz-timer").text(score(quizResults)); //updates timer/score
           alert("Time's up!") //flags the player
           reviewQuiz();
           return;
       }
       }, 1000);
   return;
};

//and then review the game!
var reviewQuiz = function(){
   //It loops through the questions JSON
   for(i=0;i<questions.length;i++)
       $.each($("input[name='ans"+i+"']:checked"), function() {
           //what happens if you win
           if ($(this).val() === questions[i].correct){
               correctAns++; 
               console.log("Correct: "+correctAns);
               //what happens if you loose
           } else {
               wrongAns++; 
               console.log("Wrong: "+wrongAns);
           };
       }
   );
   $("#quiz").html("<br>"+"Correct: "+correctAns+"<br>"+"Wrong: "+wrongAns+"<br>"+"Unanswered: "+ missing(noAns) + "<br>");
   console.log(missing(noAns)); //confirm number of questions had no answer

    $("#quiz-timer").text(score(quizResults));
   console.log(score(quizResults)); // confirm percentage score calculation

    
};