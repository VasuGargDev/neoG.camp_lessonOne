var readlineSync = require('readline-sync');
var score = 0;


var questionOne = "Are you under 25?"

var userAnswer = readlineSync.question(questionOne);

console.log("You entered " + userAgeInput);

if(userAgeInput === "yes") {
  console.log("You are right.")
  score = score + 1;
  console.log("Score is:" + score);
} 
else {
  console.log("You are wrong.")
  score = score - 1;
  console.log("Score is:" + score);
}


var questionTwo = "Are you from Delhi?"

var userAgeInput = readlineSync.question(questionTwo );

console.log("You entered " + userAgeInput);

if(userAgeInput === "yes") {
  console.log("You are right.")
  score = score + 1;
  console.log("Score is:" + score);
} 
else {
  console.log("You are wrong.")
  score = score - 1;
  console.log("Score is:" + score);
}