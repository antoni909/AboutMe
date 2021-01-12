/*

JS INSTRUCTIONS ARE AS FOLLOWS:
- js file must contain 'use strict' declaration
- js must be linked to html file as an externel script file
- make sure all code is clean
- correct indentation and syntax

JS CODE INSTRUCTIONS:
- Prompt User 5x with Y/N questions
- Consisder case sensitivity by normalizing user input (.  toUpperCase or .toLowerCase)
- Alert the user if they answered the question correctly or not
- Add console.log() messages within app to notify if they are correct.
- Comment out these console.logs for submission
- Replace console.logs with alerts() to complete the project

*/

'use strict';

var questionOne;

function userQuestionOne() {
  var questionOne = prompt('Hello, Welcome to my Page! What is your name?');

  if (questionOne == questionOne) {
    var compResponseOne = console.log('Your name is: ' + questionOne.toLowerCase + '!' + ' Welcome to my About Me page :D');
    // var compResponse = alert('Your name is: ' + questionOne.toLowerCase + '!' + ' Welcome to my About Me page :D');
  }else {
    compResponseOne = console.log('That is unfortunate, refresh the page and try again');
    // compResponse = alert('That is unfortunate, refresh the page and try again');
  }
  return compResponseOne;
}

var userResponseOne = userQuestionOne();

function userQuestionTwo() {
  var questionTwo = prompt('What color is the sky on clear and non-cloudy day?');

  if (questionTwo == ('sky blue' | 'blue' | 'light blue')) {
    var compResponseTwo = console.log(questionOne + ' , your answer is correct! Great Job');
    // var compResponse = alert(questionOne + ' , your answer is correct! Great Job');
  }else {
    compResponseTwo = console.log(questionOne + ' ,That is unfortunate, refresh the page and try again');
    // compResponse = alert(questionOne + ' ,That is unfortunate, refresh the page and try again');
  }
  return compResponseTwo;
}

var userResponseTwo = userQuestionTwo(questionOne);
