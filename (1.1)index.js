// console.log("Vasu Garg");
var readlineSync = require('readline-sync');

var userName = readlineSync.question("Your name please ");

var welcomeMessage = "Welcome " + userName;
console.log(welcomeMessage);