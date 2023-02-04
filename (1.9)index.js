var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName +" let's play a game ");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("right!");
    score+=1;
  }
  else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-/-/-/-/-"); 
}


//array of obj
var questions = [{
  question: "Where do you live? ",
  answer: "Delhi"
}, {
  question: "Your favorite superhero? ",
  answer: "IronMan"  
}]; 


//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log("Your final score", score);


//  https://replit.com/@VASUGARG2/neoGcamp-19#index.js?embed=1&output=1
//  ?embed=1&output=1