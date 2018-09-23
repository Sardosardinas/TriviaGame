# TriviaGame
A homework that involves times 


This time I made a homework about a trivia that should have a timer. 

The questions at the end is the last part that will matter in here.
What is interesting on this project is the object.

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
 
 This object, as big as it is not only holds the question, but also the answer, to do this, follow the next for loop inside of a for loop
 
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

The set timers are not that complicated if you follow my code, but please keep in mind that the alert is there because once the time
gets to 0, the clock does not stop. But then again, if the player does not see it, it is not a pain as long as his experience is good.

best!

Alix
