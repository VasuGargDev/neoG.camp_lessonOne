var readlineSync = require("readline-sync");

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right answer!");
    score+=1;
  }
  else {
    console.log("Wrong answer!");
    score-=1;
  }
}

play("Where do I work?", "AKQA");

play("Do i still work there?", "No");

console.log("your score is", score)


